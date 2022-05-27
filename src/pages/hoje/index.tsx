import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Today } from "../../components/Today";
import { Footer } from "../../components/Footer";

const Hoje: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tarefas de Hoje | TrackIt</title>
      </Head>
      <Header />
      <Today />
      <Footer />
    </>
  );
};

export default Hoje;
