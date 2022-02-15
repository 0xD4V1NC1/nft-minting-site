import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import SecondPage from "./pages/SecondPage";

// here is where we store all of the routes for our pages. Any new page needs to be added to this file, and its correlated paths
export default function AppRoutes() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="second-page" element={<SecondPage />} />
    </Routes>
  </div>
  );
}