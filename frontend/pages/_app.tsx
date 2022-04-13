import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import { ModalsProvider } from "../contexts/ModalsContext";
import Navbar from "../components/navbar/Navbar";

function Forum({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalsProvider>
        <Navbar />
        <Component {...pageProps} />
      </ModalsProvider>
    </AuthProvider>
  );
}

export default Forum;
