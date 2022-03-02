import React, { useCallback, useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Register from "./components/screens/register/Register";
import DashBoard from "./components/screens/dashboard/DashBoard";
import Jnf from "./components/forms/jnf/Jnf";
import Inf from "./components/forms/inf/Inf";
import InfUpdate from "./components/forms/inf/InfUpdate";
import JnfUpdate from "./components/forms/jnf/jnfUpdate";
import Login from "./components/forms/login/Login";
import AuthContext from "./context/AuthContext";
import HomePage from "./components/screens/main/HomePage";
import RegisterUpdate from "./components/forms/register/RegisterUpdate";
import PreviewInf from "./components/forms/inf/PreviewInf";
import InfEdit from "./components/forms/inf/InfEdit";
import PreviewJnf from "./components/forms/jnf/PreviewJnf";
import JnfEdit from "./components/forms/jnf/JnfEdit";
import Admin from "./components/screens/admin/Admin";
import CompanyView from "./admin_components/view/CompanyView";

const App = () => {
  const [token, setToken] = useState(""); 
  console.log('run...')

  const login = useCallback((token, expirationDate) => {
    console.log("enter login fucntion");
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
      setToken(token);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: token,
        expirationDate: tokenExpirationDate,
      })
    );
    
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');

  }, []);
  console.log(token);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    console.log("data from useEffect: ", data);
    if (data && data.token ) {
      login(data.token,new Date(data.expirationDate));
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        Login: login,
        LogOut: logout,
      }}
    >
      <Routes>
          {console.log('token from routes: ',token)}
        {token ? (
          <React.Fragment>
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
              element={<RegisterUpdate/>}
            />
            <Route
              path="dashboard/:companyId/previewInf"
              element={<PreviewInf />}
            />
            <Route
              path="dashboard/:companyId/infEdit"
              element={<InfEdit />}
            />
            <Route
              path="dashboard/:companyId/previewJnf"
              element={<PreviewJnf />}
            />
            <Route
              path="dashboard/:companyId/JnfEdit"
              element={<JnfEdit />}
            />
            <Route 
            path="admin"
            element={<Admin/>} />
            <Route
            path="admin/companyView/:compId"
            element={<CompanyView />} />
            {/* <Route path="*" element={<Navigate to="dashboard/:companyId" />} /> */}
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<Login />} />
            <Route
              path="/register"
              element={<Register actionLabel={`Register`} />}
            />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </React.Fragment>
        )}
      </Routes>
    </AuthContext.Provider>
  );
};

export default App;
