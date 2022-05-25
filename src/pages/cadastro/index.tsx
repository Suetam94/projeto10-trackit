import { NextPage } from "next";
import { SignUp } from "../../components/SignUp";
import Head from "next/head";

const Cadastro: NextPage = () => {
  return (
    <>
      <Head>
        <title>Cadastro | TrackIt</title>
      </Head>
      <SignUp />
    </>
  );
};

export default Cadastro;
