import Link from "next/link";
import { IThread } from "../lib/types";
import Avatar from "./user/Avatar";

const LatestThreads = ({ threads }: { threads: IThread[] }) => {
  return (
    <div className="col-span-full lg:col-span-3 card flex flex-col justify-between gap-y-2">
      <h2 className="font-extrabold text-3xl text-brand-400">Latest threads</h2>
      {threads.map((thread) => (
        <Link key={thread.id} href={`/thread/${thread.id}`}>
          <a
            key={thread.id}
            className="flex items-center gap-x-4 px-2 rounded-md bg-neutral-800 hover:bg-neutral-700 transition-colors"
          >
            <Avatar user={thread.user!} size={40} />
            <div>
              <h3 className="font-bold text-lg text-brand-400">
                {thread.title}
              </h3>
              <p>{thread.body}</p>
              <p className="text-sm text-neutral-500">
                {new Date(thread.createdAt!).toDateString()}
              </p>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default LatestThreads;
