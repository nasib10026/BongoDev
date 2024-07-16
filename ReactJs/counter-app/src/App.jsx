import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

//component e state poriborton hole rerender hoy.setter function diye state update kora lage.state er value sathe sathe update hoy na.je muhurte update hoy asynchronously hoy.parent component rerender hole childreno rerender hobe.rerender sheshe dekhe useEffect hook ase kina.UseEffect hook thakle er dependency list e kono state ase kina.hook ashole function ekta.List na dile component rerender hole protibar useEffect er bhitor ashbe.

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
    };
    useEffect(()=>{
      console.log("useEffect 1 is executing....");
    },[count]);

    //state change hole rerender hoy.state change hole jotogula useEffect ase shob dekhe.je state change hoise sheta jar dependency list e thake shei functionta execute kore.

   
    useEffect(()=>{
      console.log("useEffect 2 is executing....");
      //send loadcount to backend.prottek render e useEffect ta fire hobe.
    },[]);
    //faka list pathale prothombar component ta jokhon load hobe tokhon fire hobe shudhu.rendering age hobe then effect fire hobe.component load hobe then bolbo data lagbe data den.(server er kase chabo).


 //eta prothombar load howa mount howa bole.state poriborton e rerender hoy.rerender hole khoje component e useEffect ase kina?list ase kina?faka thakle first bar render korbe just.list e state thakle.list er bhitor kisu change hole oy functionta execute hobe.etake component er lifecycle bole.mount howa theke unmount howa porjonto.
  return (
    
      <div className="App">
        <h1>Multiple Counters</h1>
        <Counter initialCount={0} />
        <Counter initialCount={10} />
        <Counter initialCount={20} />
      </div>
    
  );
}

export default App;
