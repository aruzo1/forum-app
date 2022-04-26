import { Menu } from "@headlessui/react";
import { useAuth } from "contexts/Auth";
import Fade from "components/animations/Fade";
import ArrowDown from "public/icons/arrowDown.svg";
import Avatar from "components/ui/Avatar";
import Link from "next/link";

const AccountMenu = () => {
  const { user, logout } = useAuth()!;

  return (
    <div className="flex items-center gap-x-2">
      <Avatar user={user} size={42} />
      <Link href={`/user/${user?.id}`}>
        <a className="link">{user?.login}</a>
      </Link>
      <Menu as="div" className="relative">
        <Menu.Button className="f-center w-[42px] h-[42px] btn-border p-0">
          <ArrowDown />
        </Menu.Button>
        <Fade>
          <Menu.Items className="z-10 absolute right-0 flex flex-col w-56 mt-5 card p-2">
            <button className="btn-border w-full" onClick={logout}>
              Logout
            </button>
          </Menu.Items>
        </Fade>
      </Menu>
    </div>
  );
};

export default AccountMenu;
