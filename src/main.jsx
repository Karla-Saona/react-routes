import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/resume" element={<Resume />} />
    </Routes>
</BrowserRouter>
);