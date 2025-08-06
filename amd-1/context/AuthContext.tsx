import React, { ReactNode, useContext, useState } from "react";

const AuthContext = React.createContext<any>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isUser, setIsUser] = useState(false);

  const login = () => setIsUser(true);
  const logout = () => setIsUser(false);

  return (
    <AuthContext.Provider value={{ isUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
    return useContext(AuthContext);
}

export default AuthProvider;