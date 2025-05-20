import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import DetalhesPage from "./pages/DetalhesPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detalhes/:id" element={<DetalhesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
