import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";

var nameList = [
  "Time",
  "Past",
  "Future",
  "Dev",
  "Fly",
  "Flying",
  "Soar",
  "Soaring",
  "Power",
  "Falling",
  "Fall",
  "Jump",
  "Cliff",
  "Mountain",
  "Rend",
  "Red",
  "Blue",
  "Green",
  "Yellow",
  "Gold",
  "Demon",
  "Demonic",
  "Panda",
  "Cat",
  "Kitty",
  "Kitten",
  "Zero",
  "Memory",
  "Trooper",
  "XX",
  "Bandit",
  "Fear",
  "Light",
  "Glow",
  "Tread",
  "Deep",
  "Deeper",
  "Deepest",
  "Mine",
  "Your",
  "Worst",
  "Enemy",
  "Hostile",
  "Force",
  "Video",
  "Game",
  "Donkey",
  "Mule",
  "Colt",
  "Cult",
  "Cultist",
  "Magnum",
  "Gun",
  "Assault",
  "Recon",
  "Trap",
  "Trapper",
  "Redeem",
  "Code",
  "Script",
  "Writer",
  "Near",
  "Close",
  "Open",
  "Cube",
  "Circle",
  "Geo",
  "Genome",
  "Germ",
  "Spaz",
  "Shot",
  "Echo",
  "Beta",
  "Alpha",
  "Gamma",
  "Omega",
  "Seal",
  "Squid",
  "Money",
  "Cash",
  "Lord",
  "King",
  "Duke",
  "Rest",
  "Fire",
  "Flame",
  "Morrow",
  "Break",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rotten",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Desert",
  "Dessert",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Tall",
  "Sith",
  "Bounty",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Joy",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Lie",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Zombie",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "One",
  "Two",
  "Uno",
  "Slice",
  "Slash",
  "Melt",
  "Melted",
  "Melting",
  "Fell",
  "Wolf",
  "Hound",
  "Legacy",
  "Sharp",
  "Dead",
  "Mew",
  "Chuckle",
  "Bubba",
  "Bubble",
  "Sandwich",
  "Smasher",
  "Extreme",
  "Multi",
  "Universe",
  "Ultimate",
  "Death",
  "Ready",
  "Monkey",
  "Elevator",
  "Wrench",
  "Grease",
  "Head",
  "Theme",
  "Grand",
  "Cool",
  "Kid",
  "Boy",
  "Girl",
  "Vortex",
  "Paradox",
];
function generateNames() {
  let finalName = nameList[Math.floor(Math.random() * nameList.length)];
  return finalName;
}

const user = {
  name: "Itachi Uchiha",
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCmVMklk6tHH1bpwCSSdCafrknq2KhcNZwM3fppC2D65nk6ZUifXcrTb_6spjDFOpYNQ&usqp=CAU",
};

const CHAT_MESSAGES_LIMIT = 10;

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('')

  function fetchData() {
    // logic for api call
    const data = [
      {
        name: generateNames(),
        avatar:
          "https://yt4.ggpht.com/h3Gk8ymIDaKBEa5Sur-qu2K3WBO5DRMsIIUejqLCmKY1j6PJ4iL0dmcLwXjnEMYBBHaIDQ0x=s32-c-k-c0x00ffffff-no-rj",
        message: "Hello everyone, I am new to stream!",
      },
    ];

    setMessages((messages) => {
      let newMessageList = [...data, ...messages];
      newMessageList = newMessageList.splice(0, CHAT_MESSAGES_LIMIT);
      return newMessageList;
    });
  }

  // TODO: Improvements in code quality 
  function addMessage(){
    let msg = {...user, message:userMessage}
   setMessages((messages) => [msg,...messages])
   setUserMessage('')
  }

  useEffect(() => {
    const intervalID = setInterval(fetchData, 2000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className="ml-2 p-2 border border-black w-full">
      <div className=" w-full h-[500px] overflow-y-scroll flex flex-col-reverse">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
      </div>
      <div className="p-2 m-2 border border-black flex">
        <input value={userMessage} className="w-full outline-none" type="text" placeholder="Chat..." onChange={(e)=>{setUserMessage(e.target.value)}} />
        <button onClick={addMessage} className="py-2 px-4 mx-2 font-bold border border-black">Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
