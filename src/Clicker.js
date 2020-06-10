import React, { useState, useEffect } from "react";
import cookie from "./images/cookie.png";

function Clicker(props) {
  const [left, setLeft] = useState("50%");
  const [top, setTop] = useState("50%");
  const [points, setPoints] = useState(0);
  const [time, setTime] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      let randomLeftPosition = `${
        Math.floor(Math.random() * (90 - 0 + 1)) + 0
      }%`;
      let randomTopPosition = `${
        Math.floor(Math.random() * (90 - 0 + 1)) + 0
      }%`;

      setLeft(randomLeftPosition);
      setTop(randomTopPosition);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === 0) {
      props.endGame(points);
    }

    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const addPoints = () => {
    setPoints(points + 1);
  };

  return (
    <div className="ui container">
      <img
        style={{
          position: "absolute",
          left,
          top,
        }}
        onClick={addPoints}
        src={cookie}
      />

      <h3 className="ui grey right floated header">{time} seconds left</h3>

      <h1 className="ui center aligned header">
        <span style={{ color: "#654321" }}> {points} </span> points
      </h1>
    </div>
  );
}

export default Clicker;
