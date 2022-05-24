import { NextPage } from "next";
import { SignIn } from "../../components/SignIn";
import Head from "next/head";

const Cadastro: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cadastro | TrackIt</title>
      </Head>
      <SignIn />
    </>
  );
};

export default Cadastro;
