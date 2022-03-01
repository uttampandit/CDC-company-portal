import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/forms/register/Register";
import DashBoard from "./components/screens/dashboard/DashBoard";
import Jnf from "./components/forms/jnf/Jnf";
import Inf from "./components/forms/inf/Inf";
import InfUpdate from "./components/forms/inf/InfUpdate";
import JnfUpdate from "./components/forms/jnf/jnfUpdate";
import Login from "./components/forms/login/Login"
import RegisterUpdate from "./components/forms/register/RegisterUpdate";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="register"
          element={<Register />}
        />
        <Route
        path="login"
        element={<Login />} />
        <Route path="dashboard/:companyId" element={<DashBoard />} />
        <Route path="dashboard/:companyId/jnf" element={<Jnf />} />
        <Route path="dashboard/:companyId/inf" element={<Inf />} />
        <Route
          path="dashboard/:companyId/updateinf/:infId"
          element={<InfUpdate />}
        />
        <Route
          path="dashboard/:companyId/updatejnf/:jnfId"
          element={<JnfUpdate />}
        />
        <Route
          path="dashboard/:companyId/updateCompany"
          element={<RegisterUpdate />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
