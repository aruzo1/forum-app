import Link from "next/link";
import { useModals } from "../lib/contexts/ModalsContext";
import Logo from "../public/logo.svg";

const Navbar = () => {
  const { openModal } = useModals();

  return (
    <nav className="bg-neutral-800 border-b border-neutral-700">
      <div className="container flex justify-between items-center h-16">
        <Link href="/">
          <a>
            <Logo className="fill-brand-400 hover:fill-brand-300 transition-colors" />
          </a>
        </Link>
        <div className="flex gap-x-4">
          <button className="button-border" onClick={() => openModal!("login")}>
            Login
          </button>
          <button
            className="button-brand"
            onClick={() => openModal!("register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
