import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Artist from "./pages/Artists";

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
        <Routes>
          <Route path="/dashboard" element={<Dashboard open={open} />} />
          <Route path="/users" element={<Users open={open} />} />
          <Route path="/artists" element={<Artist open={open} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
