import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import TestCasesTable from "./components/TestCasesTable";
import "./App.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState("testCases");

  return (
    <div className="app-container">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-content">
        {activeComponent === "testCases" && <TestCasesTable />}
      </div>
    </div>
  );
};

export default App;