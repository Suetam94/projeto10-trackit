import type { NextPage } from "next";
import { Login } from "../components/Login";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login | TrackIt</title>
      </Head>
      <Login />
    </>
  );
};

export default Home;
