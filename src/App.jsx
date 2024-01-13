import React, { useState } from "react";
import "./App.css";
import Texteditor from "./components/Texteditor";
import { Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login/login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
