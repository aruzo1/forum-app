import Link from "next/link";
import { useAuth } from "../../contexts/AuthContext";
import { useModals } from "../../contexts/ModalsContext";
import Logo from "../../public/logo.svg";
import Account from "./Account";

const Navbar = () => {
  const { user } = useAuth();
  const { openModal } = useModals();

  return (
    <nav className="bg-neutral-800 border-b border-neutral-700">
      <div className="container flex justify-between items-center h-16">
        <Link href="/">
          <a>
            <Logo className="fill-brand-400 hover:fill-brand-300 transition-colors" />
          </a>
        </Link>
        {user && <Account />}
        {user === null && (
          <div className="flex gap-x-4">
            <button className="btn-border" onClick={() => openModal!("login")}>
              Login
            </button>
            <button
              className="btn-brand"
              onClick={() => openModal!("register")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
