import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Deposit from "./screens/Deposit";
import Withdraw from "./screens/Withdraw";

import ActionButtons from "./Component/ActionButtons";

function App() {
  return (
    <div className={'root'}>
    <ActionButtons />
      <Routes>
        <Route path="/" element={<Deposit />}></Route>
        <Route path="/deposit" element={<Deposit />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
      </Routes>
    </div>
  );
}

export default App;
