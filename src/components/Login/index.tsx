import Link from "next/link";
import { FormEvent, useContext, useState } from "react";

import {
  LoginContainer,
  LoginImage,
  Form,
  Input,
  Button,
  SignInLink,
} from "../../styles/LoginSignInStyle";
import UserDataContext from "../../context/UserContext";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setLoginData } = useContext(UserDataContext);

  function handleLoginRequest(event: FormEvent) {
    event.preventDefault();

    const loginObject = {
      email,
      password,
    };

    setLoginData(loginObject);
  }

  return (
    <LoginContainer>
      <LoginImage src={"/images/logo.svg"} />
      <Form onSubmit={(e) => handleLoginRequest(e)}>
        <Input
          type={"text"}
          placeholder={"email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"senha"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type={"submit"}>Entrar</Button>
        <Link href={"/cadastro"}>
          <SignInLink>Não tem uma conta? Cadastre-se!</SignInLink>
        </Link>
      </Form>
    </LoginContainer>
  );
}
