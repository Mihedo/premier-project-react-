import React, { useState } from "react";

export function Tweet({ id, name, content, like, onDelete }) {
  const [numLikes, setNumLikes] = useState(like);

  const onLike = () => {
    setNumLikes(numLikes + 1);
  };

  return (
    <div className="tweet">
      <button onClick={() => onDelete(id)} className="delete">
        ❌
      </button>
      <h3>{name}</h3>
      <p>{content}</p>
      <button onClick={onLike}>{numLikes} ❤️</button>
    </div>
  );
}
