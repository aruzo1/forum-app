import jwt from "jsonwebtoken";

export default (token: string): JwtUser | null => {
  try {
    return jwt.verify(token, process.env.SECRET!) as JwtUser;
  } catch {
    return null;
  }
};
