import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: null,
  login: () => {},
  signOut: () => {},
});

export default AuthContext;
