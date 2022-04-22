import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import client from "../lib/graphql/client";
import { IAuthContext, ILoginValues, IRegisterValues } from "../lib/types";
import { ACCOUNT } from "../lib/graphql/queries";
import { LOGIN, REGISTER } from "../lib/graphql/mutations";

const initialValues: IAuthContext = {
  user: undefined,
};

const AuthContext = createContext(initialValues);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(initialValues.user);
  const router = useRouter();

  const register = async (data: IRegisterValues) => {
    return client
      .mutate({ mutation: REGISTER, variables: { data } })
      .then(({ data }) => {
        localStorage.setItem("token", data.register.token);
        setUser(data.resgister.user);
      });
  };
  const login = async (data: ILoginValues) => {
    return client
      .mutate({ mutation: LOGIN, variables: { data } })
      .then(({ data }) => {
        localStorage.setItem("token", data.login.token);
        setUser(data.login.user);
      });
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    if (router.isReady) {
      const queryToken = router.query.token as string;
      if (queryToken) {
        localStorage.setItem("token", queryToken);
        // Remove queries from url
        router.replace("/", undefined, { shallow: true });
      }

      client
        .query({ query: ACCOUNT })
        .then((res) => setUser(res.data.account))
        .catch(() => {
          setUser(null);
          localStorage.removeItem("token");
        });
    }
  }, [router.isReady]);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
