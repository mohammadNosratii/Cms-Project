import React from "react";
import "./App.css";
import Sidebar from "./components/Module/Sidebar/Sidebar";
import { useRoutes } from "react-router-dom";
import Header from "./components/Module/Header/Header";
import routes from "./routes/routes";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  
  const router = useRoutes(routes);

  const client = new QueryClient();

  return (
    <div className="flex font-sans">
      <QueryClientProvider client={client}>
        <Sidebar />
        <div className="flex-[4] p-3">
          <Header />
          {router}
        </div>
      </QueryClientProvider>
    </div>
  );
}

export default App;
