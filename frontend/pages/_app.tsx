import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "../components/contexts/AuthContext";
import { ModalsProvider } from "../components/contexts/ModalsContext";
import Navbar from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ModalsProvider>
        <Navbar />
        <Component {...pageProps} />
      </ModalsProvider>
    </AuthProvider>
  );
}

export default MyApp;
