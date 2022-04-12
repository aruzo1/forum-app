import { Menu } from "@headlessui/react";
import { useAuth } from "../contexts/AuthContext";
import Fade from "../animations/Fade";
import ArrowDown from "../../public/icons/arrowDown.svg";
import Avatar from "../Avatar";

const Account = () => {
  const { user, logout } = useAuth();

  return (
    <div className="flex items-center gap-x-2">
      <Avatar user={user} size={40} />
      <h3 className="font-semibold text-brand-400">{user?.login}</h3>

      <Menu as="div" className="relative">
        <Menu.Button className="f-center w-[40px] h-[40px] rounded-full border border-neutral-700 hover:border-neutral-600 hover:bg-neutral-700 transition-colors">
          <ArrowDown className="fill-white" />
        </Menu.Button>
        <Fade>
          <Menu.Items
            as="ul"
            className="z-10 absolute right-0 flex flex-col w-56 mt-6 card p-2"
          >
            <button className="btn-border w-full text-center" onClick={logout}>
              Logout
            </button>
          </Menu.Items>
        </Fade>
      </Menu>
    </div>
  );
};

export default Account;
