import type { NextPage } from "next";
import Head from "next/head";
import Welcome from "../components/Welcome";

const Home: NextPage = () => {
  return (
    <div className="container layout">
      <Head>
        <title>Forum | Home</title>
      </Head>
      <Welcome />
    </div>
  );
};

export default Home;
