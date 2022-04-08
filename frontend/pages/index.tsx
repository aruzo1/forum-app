import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { IThread } from "../lib/types";
import { fetchLatestThreads } from "../lib/graphql/queries";
import Welcome from "../components/Welcome";
import LatestThreads from "../components/LatestThreads";

interface Props {
  latestThreads: IThread[];
}

const HomePage: NextPage<Props> = ({ latestThreads }) => {
  return (
    <div className="container layout">
      <Head>
        <title>Forum | Home</title>
      </Head>
      <Welcome />
      <LatestThreads threads={latestThreads} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const latestThreads = await fetchLatestThreads();

  return { props: { latestThreads }, revalidate: 10 };
};

export default HomePage;
