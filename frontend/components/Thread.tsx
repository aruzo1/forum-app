import Link from "next/link";
import { IThread } from "lib/types";
import Avatar from "components/ui/Avatar";

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
    <h1 className="break-words title text-brand">{thread.title}</h1>
    <p className="break-words">{thread.body}</p>
  </div>
);

export default Thread;
