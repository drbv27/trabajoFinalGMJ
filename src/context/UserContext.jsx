import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const nombre = "Diego";

  return (
    <UserContext.Provider value={{ nombre }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
