import Link from "next/link";
import { IThread } from "lib/types";
import Avatar from "components/ui/Avatar";
import Comment from "public/icons/comment.svg";
import Heart from "public/icons/heart.svg";

const Thread = ({ thread }: { thread: IThread }) => (
  <div className="card col-span-full flex flex-col gap-y-4">
    <div className="flex items-center gap-x-2">
      <Avatar user={thread.user} size={48} />
      <p className="text-neutral-200">
        Posted by{" "}
        <Link href={`/user/${thread.user?.id}`}>
          <a className="link">{thread.user?.login}</a>
        </Link>
      </p>
    </div>
    <h1 className="break-words font-semibold text-3xl text-brand-400">
      {thread.title}
    </h1>
    <p className="break-words">{thread.body}</p>
    <div className="flex gap-x-4">
      <button className="flex items-center gap-x-2 group">
        <Heart className="fill-brand-400 group-hover:fill-brand-300 transition-colors" />
        <span className="font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
          1
        </span>
      </button>
      <button className="flex items-center gap-x-2 group">
        <Comment className="fill-brand-400 group-hover:fill-brand-300 transition-colors" />
        <span className="font-medium text-brand-400 group-hover:text-brand-300 transition-colors">
          3
        </span>
      </button>
    </div>
  </div>
);

export default Thread;
