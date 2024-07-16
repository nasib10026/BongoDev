import React, { useState } from "react";
import "./TicTacToe.css";
import circle_icon from "../Assets/circle.png";
import cross_icon from "../Assets/cross.png";

export const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

  const toggle = (e, num) => {
    if (lock || data[num] !== "") {
      return;
    }
    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = "x";
    } else {
      newData[num] = "o";
    }
    setData(newData);
    setCount(count + 1);
  };

  const resetGame = () => {
    setData(["", "", "", "", "", "", "", "", ""]);
    setCount(0);
    setLock(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game In <span>React</span>
      </h1>
      <div className="board">
        <div className="Row1">
          <div className="boxes" onClick={(e) => toggle(e, 0)}>
            {data[0] === "x" && <img src={cross_icon} alt="cross" />}
            {data[0] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 1)}>
            {data[1] === "x" && <img src={cross_icon} alt="cross" />}
            {data[1] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 2)}>
            {data[2] === "x" && <img src={cross_icon} alt="cross" />}
            {data[2] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        </div>
        <div className="Row2">
          <div className="boxes" onClick={(e) => toggle(e, 3)}>
            {data[3] === "x" && <img src={cross_icon} alt="cross" />}
            {data[3] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 4)}>
            {data[4] === "x" && <img src={cross_icon} alt="cross" />}
            {data[4] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 5)}>
            {data[5] === "x" && <img src={cross_icon} alt="cross" />}
            {data[5] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        </div>
        <div className="Row3">
          <div className="boxes" onClick={(e) => toggle(e, 6)}>
            {data[6] === "x" && <img src={cross_icon} alt="cross" />}
            {data[6] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 7)}>
            {data[7] === "x" && <img src={cross_icon} alt="cross" />}
            {data[7] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
          <div className="boxes" onClick={(e) => toggle(e, 8)}>
            {data[8] === "x" && <img src={cross_icon} alt="cross" />}
            {data[8] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  );
};
