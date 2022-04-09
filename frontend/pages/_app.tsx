import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../lib/contexts/AuthContext";
import { ModalsProvider } from "../lib/contexts/ModalsContext";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalsProvider>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </ModalsProvider>
  );
}

export default MyApp;
