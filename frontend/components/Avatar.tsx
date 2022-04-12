import Image from "next/image";
import Link from "next/link";
import { IUser } from "../lib/types";

const Avatar = ({ user, size }: { user: IUser; size: number }) => {
  return (
    <Link href={`/user/${user.id}`}>
      <a className="hover:brightness-125 transition">
        <Image
          src={user.avatarUrl || "/images/unknownAvatar.jpg"}
          width={size}
          height={size}
          className="rounded-full"
        />
      </a>
    </Link>
  );
};

export default Avatar;
