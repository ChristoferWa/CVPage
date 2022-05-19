import { React } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import About from "./routes/About";
import Experience from "./routes/Experience";
import Portfolio from "./routes/Portfolio";
import Contact from "./routes/Contact";
import './index.css'
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </BrowserRouter>
  );
