import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import client from "../../lib/graphql/client";
import { IAuthContext, ILoginValues, IRegisterValues } from "../../lib/types";
import { fetchAccount } from "../../lib/graphql/queries";
import { fetchLogin, fetchRegister } from "../../lib/graphql/mutations";

const initialValues: IAuthContext = {
  user: undefined,
};

const AuthContext = createContext(initialValues);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(initialValues.user);
  const router = useRouter();

  const register = async (data: IRegisterValues) => {
    return fetchRegister(data).then((res) => {
      localStorage.setItem("token", res.token);
      setUser(res.user);
    });
  };
  const login = async (data: ILoginValues) => {
    return fetchLogin(data).then((res) => {
      localStorage.setItem("token", res.token);
      setUser(res.user);
    });
  };
  const logout = () => setUser(null);

  useEffect(() => {
    if (router.isReady) {
      const queryToken = router.query.token as string;
      if (queryToken) {
        router.replace("/", undefined, { shallow: true });
        localStorage.setItem("token", queryToken);
      }

      const token = localStorage.getItem("token");
      if (!token) return setUser(null);

      client.setHeader("Authorization", token);
      fetchAccount()
        .then((account) => setUser(account))
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
