import Image from "next/image";
import Link from "next/link";
import { IUser } from "../lib/types";

const Avatar = ({ user, size }: { user: IUser; size: number }) => {
  return (
    <Link href={`/user/${user?.id}`}>
      <a
        className="relative hover:brightness-125 transition"
        style={{ width: size, height: size }}
      >
        <Image
          src={user?.avatarUrl || "/images/unknownAvatar.jpg"}
          layout="fill"
          className="rounded-full"
        />
      </a>
    </Link>
  );
};

export default Avatar;
