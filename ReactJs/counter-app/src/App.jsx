import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  //state change korte hole
  const [count,setCount] = useState(0)//useState hook.initial state in bracket
  //secondta mutation function setCount
  const increaseCount = () => {
  setCount(count + 1);//mutation function use
  };

  //state sathe sathe change kore na.state er value update hole componentta re-render hobe.re-render virtual dom e hoy.Then actual dom e change kore.

  //component e thaka state change korte statechange concept use hoy
  const decreaseCount = ()=>{
    if(count === 0)
      {
        alert("count can not be less than zero");
        return;
      }
    setCount(count - 1);
  }

  const resetCount = () =>
    {
      setCount(0)
    }
  return (
    <div className="App">
      <div>Count is: {count}</div>
      <div className="buttons">
      <button onClick={increaseCount}>+</button>
      <button onClick={resetCount}>reset</button>
      <button onClick={decreaseCount}>-</button>
      </div>
      
    </div>
  );
}

export default App;
