import { AuthChecker } from "type-graphql";

const authChecker: AuthChecker<Context> = ({ context }) => {
  if (!context.user) return false;
  return true;
};

export default authChecker;
