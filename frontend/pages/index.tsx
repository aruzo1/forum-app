import type { GetServerSideProps, NextPage } from "next";
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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({ query: HOME_PAGE });
  return { props: data };
};

export default HomePage;
