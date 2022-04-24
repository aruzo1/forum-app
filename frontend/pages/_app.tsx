import type { AppProps } from "next/app";
import Router from "next/router";
import { ApolloProvider } from "@apollo/client";
import NProgress from "nprogress";
import client from "../lib/graphql/client";
import { AuthProvider } from "../contexts/Auth";
import { ModalsProvider } from "../contexts/Modals";
import Navbar from "../components/navbar/Navbar";
import "../styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Forum = ({ Component, pageProps }: AppProps) => (
  <ApolloProvider client={client}>
    <AuthProvider>
      <ModalsProvider>
        <Navbar />
        <div className="container layout">
          <Component {...pageProps} />
        </div>
      </ModalsProvider>
    </AuthProvider>
  </ApolloProvider>
);

export default Forum;
