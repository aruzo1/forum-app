import Head from "next/head";

const Page404 = () => (
  <div className="container layout">
    <Head>
      <title>Forum - 404</title>
    </Head>
    <div className="col-span-full card text-center">
      <h1 className="font-semibold text-8xl text-brand-400">404</h1>
      <p>Page not found.</p>
    </div>
  </div>
);

export default Page404;
