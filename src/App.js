import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Artist from "./pages/Artist";
import Assets from "./pages/Assets";
import Products from "./pages/Products";
import Splits from "./pages/Splits";
import Royalty from "./pages/Royalty";
import ArtistsUpdate from "./pages/ArtistsUpdate";
import UsersUpdate from "./pages/UsersUpdate";
import AssetsUpdate from "./pages/AssetsUpdate";
import ProductsUpdate from "./pages/ProductsUpdate";
import SplitsUpdate from "./pages/SplitsUpdate";
import ToastifyComponent from "./context/ToastifyContext";
import Toastify from "./components/Toastify";
import Login from "./auth/Login";
import Register from "./auth/Register";
// import Art from "./pages/Art";

function App() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <ToastifyComponent>
      <div style={{ position: "fixed", zIndex: "1000000" }}>
        <Toastify />
      </div>
      {/* <Art /> */}
      <BrowserRouter>
        <div className="App">
          <Navbar handleOpen={handleOpen} />
          <Sidebar open={open} />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Dashboard open={open} />} />
            <Route path="/users" element={<Users open={open} />} />
            <Route
              path="/edit-user/:id"
              element={<UsersUpdate open={open} />}
            />
            <Route path="/artists" element={<Artist open={open} />} />
            <Route
              path="/edit-artist/:id"
              element={<ArtistsUpdate open={open} />}
            />
            <Route path="/assets" element={<Assets open={open} />} />
            <Route
              path="/edit-asset/:id"
              element={<AssetsUpdate open={open} />}
            />
            <Route path="/products" element={<Products open={open} />} />
            <Route
              path="/edit-product/:id"
              element={<ProductsUpdate open={open} />}
            />
            <Route path="/splits" element={<Splits open={open} />} />
            <Route
              path="/edit-split/:id"
              element={<SplitsUpdate open={open} />}
            />
            <Route path="/royalty" element={<Royalty open={open} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ToastifyComponent>
  );
}

export default App;
