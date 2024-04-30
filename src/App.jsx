import React from "react";
import "./App.css";
import Sidebar from "./components/Module/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import Header from "./components/Module/Header/Header";
import routes from "./routes/routes";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-[4] p-3">
        <Header />
        {router}
      </div>
    </div>
  );
}

export default App;
