import { ReactNode } from "react";
import { useAuth } from "contexts/Auth";
import Error from "./Error";

const AuthRequired = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()!;

  if (user === undefined) return null;
  if (user === null) {
    return (
      <Error
        title="Sign in"
        msg="You have to be logged in to access this page."
      />
    );
  }

  return <>{children}</>;
};

export default AuthRequired;
