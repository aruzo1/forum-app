import Image from "next/image";
import Link from "next/link";
import { IUser } from "../../lib/types";

const Avatar = ({ user, size }: { user: IUser; size: number }) => {
  return (
    <Link href={`/user/${user?.id}`}>
      <a
        className="relative hover:brightness-125 transition"
        style={{ minWidth: size, minHeight: size }}
      >
        <Image
          src={user?.avatarUrl || "/images/unknownAvatar.jpg"}
          alt={`${user?.login} avatar`}
          layout="fill"
          className="rounded-full"
          quality={100}
        />
      </a>
    </Link>
  );
};

export default Avatar;
