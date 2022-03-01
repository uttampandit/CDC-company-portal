import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  signOut: () => {},
});

export default AuthContext;
