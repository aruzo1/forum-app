import Link from "next/link";
import { IThread } from "lib/types";
import Avatar from "components/ui/Avatar";
import timeSince from "lib/helpers/timeSince";

const LatestThreads = ({ threads }: { threads: IThread[] }) => (
  <div className="col-span-full lg:col-span-3 flex flex-col justify-between gap-y-4 card">
    <h2 className="title">Latest threads</h2>
    {threads.map((thread) => (
      <div key={thread.id} className="flex items-center gap-x-2 rounded-lg">
        <Avatar user={thread.user!} size={42} />
        <div className="w-[calc(100%-50px)]">
          <Link key={thread.id} href={`/thread/${thread.id}`}>
            <a className="block truncate link">{thread.title}</a>
          </Link>
          <p className="truncate text-sm">{thread.body}</p>
          <p className="font-light text-sm text-neutral-200">
            {timeSince(thread.createdAt!)}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default LatestThreads;
