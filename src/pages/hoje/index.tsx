import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Today } from "../../components/Today";
import Head from "next/head";

const Hoje: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tarefas de Hoje | TrackIt</title>
      </Head>
      <Header />
      <Today />
    </>
  );
};

export default Hoje;
