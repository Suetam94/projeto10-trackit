import Link from "next/link";

import {
  LoginContainer,
  LoginImage,
  Form,
  Input,
  Button,
  SignInLink,
} from "./styles";

export function Login() {
  return (
    <LoginContainer>
      <LoginImage src={"/images/logo.svg"} />
      <Form>
        <Input type={"text"} placeholder={"email"} />
        <Input type={"text"} placeholder={"senha"} />
        <Button type={"submit"}>Entrar</Button>
        <Link href={"/cadastro"}>
          <SignInLink>Não tem uma conta? Cadastre-se!</SignInLink>
        </Link>
      </Form>
    </LoginContainer>
  );
}
