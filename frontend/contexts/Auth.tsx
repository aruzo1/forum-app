import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import client from "../lib/graphql/client";
import { IAuthContext, IUser } from "../lib/types";
import { ACCOUNT } from "../lib/graphql/queries";

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser>(undefined);
  const router = useRouter();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  // Fetch user data on mount
  useEffect(() => {
    if (router.isReady) {
      const queryToken = router.query.token as string;
      if (queryToken) {
        localStorage.setItem("token", queryToken);
        // Remove queries from url
        router.replace("/", undefined, { shallow: true });
      }

      if (localStorage.getItem("token")) {
        client
          .query({ query: ACCOUNT })
          .then((res) => setUser(res.data.account))
          .catch(() => {
            setUser(null);
            localStorage.removeItem("token");
          });
      } else {
        setUser(null);
      }
    }
  }, [router.isReady]);

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
