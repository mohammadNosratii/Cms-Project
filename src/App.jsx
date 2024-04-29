import React from "react";
import "./App.css";
import Sidebar from "./components/Module/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Module/Header/Header";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[4]">
        <Header />
        {/* <Routes>
        <Route />
      </Routes> */}
      </div>
    </div>
  );
}

export default App;
