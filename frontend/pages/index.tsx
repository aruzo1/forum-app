import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import client from "../lib/graphql/client";
import { IHomePageProps } from "../lib/types";
import { HOME_PAGE } from "../lib/graphql/queries";
import Welcome from "../components/Welcome";
import LatestThreads from "../components/LatestThreads";
import Categories from "../components/Categories";

const HomePage: NextPage<IHomePageProps> = ({ threads, categories }) => (
  <div className="container layout">
    <Head>
      <title>Forum - Home</title>
    </Head>
    <Welcome />
    <LatestThreads threads={threads} />
    <Categories categories={categories} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({ query: HOME_PAGE });
  return { props: data, revalidate: 10 };
};

export default HomePage;
