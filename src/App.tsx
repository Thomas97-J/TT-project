import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Mainheader from "./components/header/MainHeader";
import Main from "./container/main";
import Shop from "./container/shop";

function App() {
  return (
    <div className="App">
      <Mainheader />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/shop/*" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
