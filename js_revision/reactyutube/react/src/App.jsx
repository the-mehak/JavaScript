import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Body } from "./components/Body";

// import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/resume" element={<h1>resume</h1>}></Route>
        <Route path="/projects" element={<h1>Project</h1>}></Route>
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
        <Route path="*" element={<h1>page not found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
