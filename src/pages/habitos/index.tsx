import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Habits } from "../../components/Habits";
import Head from "next/head";
import { Footer } from "../../components/Footer";

const Habitos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hábitos | TrackIt</title>
      </Head>
      <Header />
      <Habits />
      <Footer />
    </>
  );
};

export default Habitos;
