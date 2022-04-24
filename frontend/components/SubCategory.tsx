import Link from "next/link";
import { ISubCategory } from "../lib/types";
import Avatar from "./ui/Avatar";

const SubCategory = ({ subCategory }: { subCategory: ISubCategory }) => (
  <div className="col-span-full flex flex-col gap-y-8 card">
    <div className="flex flex-wrap justify-between items-center gap-4">
      <h1 className="font-semibold text-3xl">{subCategory.name}</h1>
      <Link href="/thread/create">
        <a className="btn-brand">Create Thread</a>
      </Link>
    </div>
    {subCategory.threads!.map((thread) => (
      <div key={thread.id} className="flex gap-x-4">
        <Avatar user={thread.user} size={48} />
        <div className="flex flex-col justify-between">
          <Link href={`/thread/${thread.id}`}>
            <a className="link">{thread.title}</a>
          </Link>
          <p className="font-light text-sm text-neutral-200">
            {new Date(thread.createdAt!).toDateString()}
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default SubCategory;
