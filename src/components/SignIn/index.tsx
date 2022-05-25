import Link from "next/link";
import { FormEvent, useState } from "react";

import { Warning } from "../Warning";
import {
  LoginContainer,
  LoginImage,
  Form,
  Input,
  Button,
  SignInLink,
} from "../../styles/LoginSignInStyle";

import emailValidator from "../../utils/validators/emailValidator";
import passwordValidator from "../../utils/validators/passwordValidator";
import nameValidator from "../../utils/validators/nameValidator";
import photoUrlValidator from "../../utils/validators/photoUrlValidator";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);

  function handleSignInRequest(event: FormEvent) {}

  return (
    <LoginContainer>
      <LoginImage src={"/images/logo.svg"} />
      <Form onSubmit={(event) => handleSignInRequest(event)}>
        <Input
          id={"email"}
          type={"text"}
          placeholder={"email"}
          onChange={(email) =>
            emailValidator(email.target.value, setEmail, setValid)
          }
        />
        <Warning
          id={"emailWarning"}
          warningText={"O email informado não é válido."}
        />
        <Input
          id={"password"}
          type={"password"}
          placeholder={"senha"}
          onChange={(password) =>
            passwordValidator(password.target.value, setPassword, setValid)
          }
        />
        <Warning
          id={"passwordWarning"}
          warningText={
            "A senha deve conter no mínimo 8 caracteres, com pelo menos uma letra maiúscula, uma letra minúscula e um número"
          }
        />
        <Input
          id={"name"}
          type={"text"}
          placeholder={"nome"}
          onChange={(name) =>
            nameValidator(name.target.value, setName, setValid)
          }
        />
        <Warning id={"nameWarning"} warningText={"Insira um nome válido."} />
        <Input
          id={"photo"}
          type={"text"}
          placeholder={"foto"}
          onChange={(photo) =>
            photoUrlValidator(photo.target.value, setPhoto, setValid)
          }
        />
        <Warning
          id={"photoWarning"}
          warningText={"Insira o endereço de uma imagem válido."}
        />
        <Button type={"submit"}>Cadastrar</Button>
        <Link href={"/"}>
          <SignInLink>Já tem uma conta? Faça login!</SignInLink>
        </Link>
      </Form>
    </LoginContainer>
  );
}
