import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";
import Dashboard from "./pages/Dashboard";

function App() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar handleOpen={handleOpen} />
        <Sidebar open={open} />
        <Dashboard open={open} />
      </div>
    </BrowserRouter>
  );
}

export default App;
