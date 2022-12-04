import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Tenants from "./pages/Tenants";

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
          <Route path="/tenants" element={<Tenants open={open} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
