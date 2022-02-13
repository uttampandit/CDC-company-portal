import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import Jnf from "./components/Jnf";
import Inf from "./components/Inf";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="register" element={<Register />}/>
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="jnf" element={<Jnf />} />
        <Route path="inf" element={<Inf />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
