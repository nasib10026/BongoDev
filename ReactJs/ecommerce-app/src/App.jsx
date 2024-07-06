import { Leftpanel } from "./components/leftPanel/Leftpanel.1";
import { RightPanel } from "./components/rightPanel";

import { createContext, useContext, useState } from "react";
import { CartProvider } from "./context";
import "./App.css";

//context create korbo globally info store korte

function App() {
  return (
    <CartProvider>
      <div className="App">
        <div className="left-panel">
          <Leftpanel />
        </div>
        <div className="right-panel">
          <RightPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
