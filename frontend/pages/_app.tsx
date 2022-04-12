import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../components/contexts/AuthContext";
import { ModalsProvider } from "../components/contexts/ModalsContext";
import Navbar from "../components/navbar/Navbar";

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
