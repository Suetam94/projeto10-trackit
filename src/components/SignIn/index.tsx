import {
  LoginContainer,
  LoginImage,
  Form,
  Input,
  Button,
  SignInLink,
} from "../../styles/LoginSignInStyle";
import Link from "next/link";

export function SignIn() {
  return (
    <LoginContainer>
      <LoginImage src={"/images/logo.svg"} />
      <Form>
        <Input type={"text"} placeholder={"email"} />
        <Input type={"text"} placeholder={"senha"} />
        <Input type={"text"} placeholder={"nome"} />
        <Input type={"text"} placeholder={"foto"} />
        <Button type={"submit"}>Cadastrar</Button>
        <Link href={"/"}>
          <SignInLink>Já tem uma conta? Faça login!</SignInLink>
        </Link>
      </Form>
    </LoginContainer>
  );
}
