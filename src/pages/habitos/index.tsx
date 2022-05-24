import { NextPage } from "next";
import { ContentHeader } from "../../components/ContentHeader";
import { Content } from "../../components/Content";
import Head from "next/head";

const Habitos: NextPage = () => {
  return (
    <>
      <Head>
        <title>Hábitos | TrackIt</title>
      </Head>
      <ContentHeader />
      <Content />
    </>
  );
};

export default Habitos;
