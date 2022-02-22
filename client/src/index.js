import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import DashBoard from "./components/DashBoard";
import Jnf from "./components/Jnf";
import Inf from "./components/Inf";
import PreviewInf from "./components/PreviewInf";
import PreviewJnf from "./components/PreviewJnf";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard/:companyId" element={<DashBoard />} />
          <Route path="dashboard/:companyId/jnf" element={<Jnf />} />
          <Route path="dashboard/:companyId/inf" element={<Inf />} />
          <Route
            path="dashboard/:companyId/preview/inf"
            element={<PreviewInf />}
          />
          <Route
            path="dashboard/:companyId/preview/jnf"
            element={<PreviewJnf />}
          />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
