import React from "react";
import Header from "./Components/Header";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Holiday from "./Components/Holiday";

function App() {
  return (
    <div className="bg-gray-100">
      <div className="flex">
        <Sidebar />
        <Header />
      </div>
      <Holiday />
    </div>
  );
}

export default App;
