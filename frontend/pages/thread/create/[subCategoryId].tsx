import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "lib/graphql/client";
import { SUB_CATEGORY } from "lib/graphql/queries";
import ThreadForm from "components/ThreadForm";
import { ICreateThreadPageProps } from "lib/types";

const CreateThreadPage: NextPage<ICreateThreadPageProps> = ({
  subCategory,
}) => (
  <>
    <Head>
      <title>Forum - {subCategory.name}</title>
    </Head>
    <ThreadForm subCategory={subCategory} />
  </>
);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const subCategoryId = params!.subCategoryId as string;

  try {
    return { props: await client.request(SUB_CATEGORY, { subCategoryId }) };
  } catch {
    return { notFound: true };
  }
};

export default CreateThreadPage;
