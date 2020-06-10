import React, { useState, useEffect } from "react";
import Clicker from "./Clicker";
import "./App.css";
import background from "./images/background.jpg";

function App() {
  const [start, setStart] = useState(false);
  const [replay, setReplay] = useState(false);
  const [number, setNumber] = useState(0);

  const endGame = (points) => {
    setStart(false);
    setReplay(true);
    setNumber(points);
  };

  const startGame = () => {
    setStart(true);
    setReplay(false);
  };

  const divStyle = {
    height: "100vh",
    backgroundImage: !start ? `url(${background})` : "none",
  };

  return (
    <div style={divStyle} className="ui container center aligned">
      {!start && (
        <div className="ui brown segment">
          {replay ? (
            <h1 className="ui header">
              Good Job! You scored {number} points. Play again?
            </h1>
          ) : (
            <h1 className="ui header">Welcome to the Cookie Clicker Game</h1>
          )}

          <p>
            Try to click on the cookie as many times as you can. You only have
            10 seconds. Good luck!
          </p>
          <button className="ui brown basic button" onClick={startGame}>
            Start
          </button>
        </div>
      )}
      {start && <Clicker endGame={endGame} />}
    </div>
  );
}

export default App;
