import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "lib/graphql/client";
import { IThreadProps } from "lib/types";
import { THREAD_PAGE } from "lib/graphql/queries";
import Thread from "components/Thread";
import Comments from "components/Comments";

const ThreadPage: NextPage<IThreadProps> = ({ thread }) => (
  <>
    <Head>
      <title>Forum - {thread.title}</title>
    </Head>
    <Thread thread={thread} />
    <Comments comments={thread.comments!} />
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
