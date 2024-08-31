import React from "react";
import Home from "./home/Home";

import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Courses from "./courses/Courses";
import Singup from "./components/Singup";

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
