import React from "react";
import { Route, Routes, Navigate } from "react-router";
import cookie from "cookie";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import AddBill from "./components/AddBill/AddBill";
import BanksPage from "./components/Banks/BanksPage";
import AddBank from "./components/Banks/AddBank";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("cookies", cookies);

  return cookies["loggedIn"] ? true : false;
};

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/dashboard"
        element={checkAuth() ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        path="/add"
        element={checkAuth() ? <AddBill /> : <Navigate to="/login" />}
      />
      <Route
        path="/banks"
        element={checkAuth() ? <BanksPage /> : <Navigate to="/login" />}
      />
      <Route
        path="/add-bank"
        element={checkAuth() ? <AddBank /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Router;
