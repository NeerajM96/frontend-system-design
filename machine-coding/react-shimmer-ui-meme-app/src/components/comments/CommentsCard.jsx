import React from "react";

const CommentsCard = ({ data }) => {
  return data.map((comment, index) => (
    <div key={index} className="pl-10 border-l-2 border-black">
      <div className="flex">
        <div>
          <img
            className="w-16 p-2 rounded-full"
            src="https://gravatar.com/avatar/4c7cd40fb27358856d9e348dc5cdfbb8?s=400&d=robohash&r=x"
            alt=""
          />
        </div>
        <div>
          <p className="font-bold px-2 py-4">{comment.username}</p>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      <div>{comment?.replies && <CommentsCard data={comment.replies} />}</div>
    </div>
  ));
};

export default CommentsCard;
