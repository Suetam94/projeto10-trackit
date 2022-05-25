import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/axios";
import { Login } from "../components/Login";

interface UserDataProviderProps {
  children: ReactNode;
}

interface Login {
  email: string;
  password: string;
}

const UserDataContext = createContext({});

export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [loginData, setLoginData] = useState<Login>({} as Login);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function login() {
      const loginRequest = {
        email: loginData.email,
        password: loginData.password,
      };
      const { data } = await api.post(`/auth/login`, loginRequest);
      setUserData(data);
    }

    login();
  }, [loginData.email, loginData.password]);

  return (
    <UserDataContext.Provider
      value={{
        setLoginData,
        userData,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
