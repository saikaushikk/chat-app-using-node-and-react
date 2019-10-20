import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1>Join</h1>
        <div>
          <input
            placeholder="name"
            className="joinInput"
            type="text"
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="room"
            className="joinInput mt-20"
            type="text"
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            Start!
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Join;
