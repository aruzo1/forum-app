import jwt from "jsonwebtoken";
import { IJwtUser } from "../types";

export default (token: string): IJwtUser | null => {
  try {
    return jwt.verify(token, process.env.SECRET!) as IJwtUser;
  } catch {
    return null;
  }
};
