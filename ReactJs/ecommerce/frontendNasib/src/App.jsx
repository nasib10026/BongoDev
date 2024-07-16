import { Leftpanel } from "./components/leftPanel/Leftpanel.1";
import { RightPanel } from "./components/rightPanel";

import { createContext, useContext, useState } from "react";
import { CartProvider } from "./context";


//context create korbo globally info store korte

function App() {
  return (
    <CartProvider>
      <div className="bg-gray-200 container mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <Leftpanel />
        </div>
        <div className="lg:w-1/4 ml-8">
          <RightPanel />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
