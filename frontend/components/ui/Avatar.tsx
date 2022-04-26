import Image from "next/image";
import Link from "next/link";
import { IUser } from "lib/types";

const Avatar = (props: { user: IUser; size: number; className?: string }) => {
  const { user, size, className } = props;

  return (
    <Link href={`/user/${user?.id}`}>
      <a
        className={`relative hover:brightness-125 transition w-fit h-fit ${className}`}
        style={{ minWidth: size, minHeight: size }}
      >
        <Image
          src={user?.avatarUrl || "/images/unknownAvatar.jpg"}
          alt={`${user?.login} avatar`}
          layout="fill"
          className="rounded-full"
        />
      </a>
    </Link>
  );
};

export default Avatar;
