import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ICategory, IThread } from "../lib/types";
import { fetchHomePage } from "../lib/graphql/queries";
import Welcome from "../components/Welcome";
import LatestThreads from "../components/LatestThreads";
import Categories from "../components/Categories";

interface Props {
  threads: IThread[];
  categories: ICategory[];
}

const HomePage: NextPage<Props> = ({ threads, categories }) => {
  return (
    <div className="container layout">
      <Head>
        <title>Forum | Home</title>
      </Head>
      <Welcome />
      <LatestThreads threads={threads} />
      <Categories categories={categories} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: await fetchHomePage(), revalidate: 10 };
};

export default HomePage;
