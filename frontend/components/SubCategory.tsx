import Link from "next/link";
import { ISubCategory } from "lib/types";
import Avatar from "components/ui/Avatar";

const SubCategory = ({ subCategory }: { subCategory: ISubCategory }) => (
  <div className="col-span-full flex flex-col gap-y-4 card">
    <div className="flex flex-wrap justify-between items-center gap-4">
      <h1 className="title">{subCategory.name}</h1>
      <Link href={`/thread/create/${subCategory.id}`}>
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
