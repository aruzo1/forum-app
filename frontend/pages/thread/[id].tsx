import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "lib/graphql/client";
import { IThreadPageProps } from "lib/types";
import { THREAD_PAGE } from "lib/graphql/queries";
import Thread from "components/Thread";

const ThreadPage: NextPage<IThreadPageProps> = ({ thread }) => (
  <>
    <Head>
      <title>Forum - {thread.title}</title>
    </Head>
    <Thread thread={thread} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params!.id as string;

  try {
    return { props: await client.request(THREAD_PAGE, { id }) };
  } catch {
    return { notFound: true };
  }
};

export default ThreadPage;
