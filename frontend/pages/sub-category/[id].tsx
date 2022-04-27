import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import client from "lib/graphql/client";
import { ISubCategoryProps } from "lib/types";
import { SUB_CATEGORY_PAGE } from "lib/graphql/queries";
import SubCategory from "components/SubCategory";

const SubCategoryPage: NextPage<ISubCategoryProps> = ({ subCategory }) => (
  <>
    <Head>
      <title>Forum - {subCategory.name}</title>
    </Head>
    <SubCategory subCategory={subCategory} />
  </>
);

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params!.id as string;

  try {
    return { props: await client.request(SUB_CATEGORY_PAGE, { id }) };
  } catch {
    return { notFound: true };
  }
};

export default SubCategoryPage;
