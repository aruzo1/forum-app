import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Avatar from "../../components/ui/Avatar";
import {
  fetchSubCategories,
  fetchSubCategoryPage,
} from "../../lib/graphql/queries";
import { ISubCategoryPageProps } from "../../lib/types";

const SubCategoryPage: NextPage<ISubCategoryPageProps> = ({ subCategory }) => {
  return (
    <div className="container layout">
      <Head>
        <title>Forum - {subCategory.name}</title>
      </Head>
      <div className="col-span-full flex flex-wrap justify-between items-center gap-4">
        <h1 className="font-semibold text-3xl">{subCategory.name}</h1>
        <Link href="/create-thread">
          <a className="btn-brand">Create Thread</a>
        </Link>
      </div>
      <ul className="col-span-full flex flex-col gap-y-8 card">
        {subCategory.threads!.map((thread) => (
          <li
            key={thread.id}
            className="flex flex-wrap justify-between items-center"
          >
            <div className="flex gap-x-4">
              <Avatar user={thread.user} size={48} />
              <div className="flex flex-col justify-between">
                <h2 className="font-medium text-brand-400">{thread.title}</h2>
                <p className="font-light text-sm text-neutral-200">
                  {new Date(thread.createdAt!).toDateString()}
                </p>
              </div>
            </div>
            <div className="hidden sm:flex flex-col items-center">
              <h3 className="font-medium text-brand-400">3</h3>
              <p className="text-sm">comments</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const subCategories = await fetchSubCategories();
  const paths = subCategories.map(({ id }) => ({ params: { id } }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const id = ctx.params!.id as string;

  try {
    return { props: await fetchSubCategoryPage(id) };
  } catch {
    return { notFound: true };
  }
};

export default SubCategoryPage;
