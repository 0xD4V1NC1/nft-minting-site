import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="second-page" element={<SecondPage />} />
    </Routes>
  </div>
  );
}

export default App;
