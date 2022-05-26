import { useRouter } from "next/router";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { api } from "../services/axios";
import { Login } from "../components/Login";
import { encodeTokenHash } from "../utils/tokenHash";

interface UserDataProviderProps {
  children: ReactNode;
}

interface Login {
  email: string;
  password: string;
}

interface UserDataProps {
  id: number;
  name: string;
  image: string;
  email: string;
  password: string;
  token: string;
}

interface UserDataContextProps {
  setLoginData: Dispatch<SetStateAction<Login>>;
  userData: UserDataProps;
}

const UserDataContext = createContext<UserDataContextProps>(
  {} as UserDataContextProps
);

export const UserDataProvider = ({ children }: UserDataProviderProps) => {
  const [loginData, setLoginData] = useState<Login>({
    email: "",
    password: "",
  });
  const [userData, setUserData] = useState<UserDataProps>({
    id: 0,
    email: "",
    image: "",
    name: "",
    password: "",
    token: "",
  });

  const [userIsLogged, setUserIsLogged] = useState(false);

  const router = useRouter();

  useEffect(() => {
    async function login() {
      const loginRequest = {
        email: loginData.email,
        password: loginData.password,
      };
      try {
        const { data } = await api.post(`/auth/login`, loginRequest);
        setUserData(data);
        await router.push({
          pathname: "/habitos",
        });
      } catch (e) {
        console.log(e); //TODO
      }
    }

    login();
    setUserIsLogged(true);
  }, [loginData.email, loginData.password, userIsLogged]);

  useEffect(() => {
    if (userData) {
      const base32Hash = encodeTokenHash(userData.token);
      localStorage.setItem("token", base32Hash);
    }
  }, [userData]);

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
