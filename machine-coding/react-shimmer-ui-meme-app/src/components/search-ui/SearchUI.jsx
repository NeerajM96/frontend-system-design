import React, { useEffect, useState } from "react";

const SearchUI = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false)
  const [cache, setCache] = useState({});

  useEffect(() => {
    const timerId = setTimeout(fetchData, 500);
    return () => clearTimeout(timerId);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSuggestionsItems(cache[searchText]);
    } else {
      const url =
        "https://www.google.com/complete/search?client=firefox&q=" + searchText;
      const data = await fetch(url);
      const json = await data.json();
      setSearchResults(json[1]);
      cache[searchText] = suggestionsItems;
    }
  };

  return (
    <div className="m-5 p-5">
      <input
        type="text"
        className="border outline-none border-gray-400 p-2 w-96 rounded-t-2xl shadow-lg"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setShowResults(true) }
        onBlur={() => setShowResults(false) }
      />
      {searchResults.length>0 && showResults &&
        <ul className="border border-gray-400 py-3 border-t-0 w-96 rounded-b-2xl shadow-lg">
          {searchResults.map((item) => {
            return (
              <li id={item} className="px-2 py-1 hover:bg-gray-100 cursor-pointer">
                {item}
              </li>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default SearchUI;
