import { NextPage } from "next";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import {Historic} from "../../components/Historic";

const Historico: NextPage = () => {
  return (
    <>
      <Head>
        <title>Histórico | TrackIt</title>
      </Head>
      <Header />
      <Historic />
      <Footer />
    </>
  );
};

export default Historico;
