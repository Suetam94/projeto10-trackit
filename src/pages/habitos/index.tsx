import { NextPage } from "next";
import { Header } from "../../components/Header";
import { Habits } from "../../components/Habits";
import Head from "next/head";

const Habitos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hábitos | TrackIt</title>
      </Head>
      <Header />
      <Habits />
    </>
  );
};

export default Habitos;
