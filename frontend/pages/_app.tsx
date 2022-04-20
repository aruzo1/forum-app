import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import { AuthProvider } from "../contexts/AuthContext";
import { ModalsProvider } from "../contexts/ModalsContext";
import Navbar from "../components/navbar/Navbar";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Forum = ({ Component, pageProps }: AppProps) => (
  <AuthProvider>
    <ModalsProvider>
      <Navbar />
      <Component {...pageProps} />
    </ModalsProvider>
  </AuthProvider>
);

export default Forum;
