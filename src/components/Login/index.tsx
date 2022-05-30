import Link from "next/link";
import { FormEvent, useContext, useEffect, useState } from "react";

import {
  LoginContainer,
  LoginImage,
  Form,
  Input,
  Button,
  SignInLink,
} from "../../styles/LoginSignInStyle";
import UserDataContext from "../../context/UserContext";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setLoginData } = useContext(UserDataContext);
  const router = useRouter();
  const [userIsAlreadyLogged, setUserIsAlreadyLoggend] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && token !== "") {
      setUserIsAlreadyLoggend(true);
    }

    if (userIsAlreadyLogged) {
      router.push({
        pathname: "/hoje",
      });
    }
  }, [router, userIsAlreadyLogged]);

  async function handleLoginRequest(event: FormEvent) {
    event.preventDefault();

    const loginObject = {
      email,
      password,
    };

    setLoginData(loginObject);

    setIsLoading(true);
    await router.push({
      pathname: "/hoje",
    });
    setIsLoading(false);
  }

  return (
    <LoginContainer>
      <LoginImage src={"/images/logo.svg"} />
      <Form onSubmit={(e) => handleLoginRequest(e)}>
        <Input
          className={isLoading ? "disabled" : ""}
          type={"text"}
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
        <Input
          className={isLoading ? "disabled" : ""}
          type={"password"}
          placeholder={"senha"}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
        <Button
          className={isLoading ? "disabled" : ""}
          id={"loginSubmitButton"}
          type={"submit"}
          disabled={isLoading}
        >
          {isLoading ? (
            <ThreeDots width={51} height={13} color={"#FFF"} />
          ) : (
            "Entrar"
          )}
        </Button>
        <Link href={"/cadastro"}>
          <SignInLink>Não tem uma conta? Cadastre-se!</SignInLink>
        </Link>
      </Form>
    </LoginContainer>
  );
}
