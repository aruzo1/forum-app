import { ExpressContext } from "apollo-server-express";
import verifyToken from "../auth/verifyToken";

export default async ({ req }: ExpressContext) => {
  const token = req.headers.authorization;

  if (token) {
    const user = verifyToken(token);
    return { user };
  }
};
