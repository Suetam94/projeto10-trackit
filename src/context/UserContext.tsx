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
  setUserIsLogged: (userIsLogged: boolean) => void;
  userIsLogged: boolean;
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
        setUserIsLogged(true);

        // await router.push({
        //   pathname: "/habitos",
        // });
      } catch (e) {
        console.log(e); //TODO
      }
    }

    login();
  }, [loginData.email, loginData.password, router]);

  useEffect(() => {
    if (userData) {
      const base32Hash = encodeTokenHash(userData.token);
      base32Hash && localStorage.setItem("token", base32Hash);
    }
  }, [userData]);

  return (
    <UserDataContext.Provider
      value={{
        setLoginData,
        userData,
        setUserIsLogged,
        userIsLogged,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
