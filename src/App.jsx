import React, { useState } from "react";
import "./App.css";
import Texteditor from "./components/Texteditor";
import { Router, Routes, Route, Link } from "react-router-dom";
import LoginForm from "./components/login/login";
import Register from "./components/Register/Register";
import Markdown from "./components/Markdown";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/editor" element={<Texteditor/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
