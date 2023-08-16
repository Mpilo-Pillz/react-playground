import React from "react";
import Header from "./components/shared/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Address from "./pages/user/Address";
import Profile from "./pages/user/Profile";
import Account from "./pages/user/Account";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/address" element={<Address />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
