import Link from "next/link";
import { useRouter } from "next/router";

import { FormEvent, useState } from "react";
import { Warning } from "../Warning";
import { GeneralModal } from "../GeneralModal";

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
import { api } from "../../services/axios";

export function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [photo, setPhoto] = useState<string>("");
  const [valid, setValid] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [requestStatusSuccess, setRequestStatusSuccess] =
    useState<boolean>(true);

  function handleIsModalClosed() {
    setIsModalOpen(false);
  }

  async function handleSignInRequest(event: FormEvent) {
    event.preventDefault();

    if (!valid) {
      return setIsModalOpen(true);
    }

    const requestBody = {
      email,
      name,
      image: photo,
      password,
    };

    try {
      const response = await api.post("/auth/sign-up", requestBody);

      setRequestStatusSuccess(response.status === 201);

      if (!requestStatusSuccess) {
        return setIsModalOpen(true);
      }

      return router.push({
        pathname: "/",
      });
    } catch (e) {
      setRequestStatusSuccess(false);
      return setIsModalOpen(true);
    }
  }

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
          warningText={"O email informado n??o ?? v??lido."}
        />
        <Input
          id={"password"}
          type={"password"}
          placeholder={"senha"}
          onChange={(password) =>
            passwordValidator(password.target.value, setPassword, setValid)
          }
          autoComplete={password}
        />
        <Warning
          id={"passwordWarning"}
          warningText={
            "A senha deve conter no m??nimo 8 caracteres, com pelo menos uma letra mai??scula, uma letra min??scula e um n??mero."
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
        <Warning id={"nameWarning"} warningText={"Insira um nome v??lido."} />
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
          warningText={"Insira o endere??o de uma imagem v??lido."}
        />
        <Button type={"submit"}>Cadastrar</Button>
        <Link href={"/"}>
          <SignInLink>J?? tem uma conta? Fa??a login!</SignInLink>
        </Link>
      </Form>
      <GeneralModal
        isOpen={isModalOpen}
        onRequestClose={handleIsModalClosed}
        infoText={
          !requestStatusSuccess
            ? "Oops! Houve um problema na solicita????o do seu cadastro, por favor, tente novamente"
            : "Oops! Algo deu errado, por favor verifique os campos destacados e tente novamente!"
        }
      />
    </LoginContainer>
  );
}
