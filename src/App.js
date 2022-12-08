import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Artist from "./pages/Artists";
import Assets from "./pages/Assets";
import Products from "./pages/Products";
import Splits from "./pages/Splits";
import Royalty from "./pages/Royalty";

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
          <Route path="/" element={<Dashboard open={open} />} />
          <Route path="/users" element={<Users open={open} />} />
          <Route path="/artists" element={<Artist open={open} />} />
          <Route path="/assets" element={<Assets open={open} />} />
          <Route path="/products" element={<Products open={open} />} />
          <Route path="/splits" element={<Splits open={open} />} />
          <Route path="/royalty" element={<Royalty open={open} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
