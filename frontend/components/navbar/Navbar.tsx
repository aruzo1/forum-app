import Link from "next/link";
import { useAuth } from "contexts/Auth";
import Logo from "public/logo.svg";
import Spinner from "components/ui/Spinner";
import AccountMenu from "components/navbar/AccountMenu";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  const { user } = useAuth()!;

  return (
    <nav className="border-b border-neutral-700 bg-neutral-800">
      <div className="container flex justify-between items-center h-16">
        <Link href="/">
          <a>
            <Logo className="fill-brand-400 hover:fill-brand-300 transition-colors" />
          </a>
        </Link>
        {user === undefined && <Spinner size={42} />}
        {user && <AccountMenu />}
        {user === null && <AuthButtons />}
      </div>
    </nav>
  );
};

export default Navbar;
