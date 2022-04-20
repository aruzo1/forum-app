import { AuthChecker } from "type-graphql";
import { IContext } from "../types";

const authChecker: AuthChecker<IContext> = ({ context }) => {
  if (!context.user) return false;
  return true;
};

export default authChecker;
