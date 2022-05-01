import { IComment } from "lib/types";
import Avatar from "components/ui/Avatar";
import Link from "next/link";
import timeSince from "lib/helpers/timeSince";

const Comments = ({ comments }: { comments: IComment[] }) => {
  return (
    <div className="col-span-full card">
      <ul className="flex flex-col gap-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="flex gap-x-2">
            <Avatar user={comment.user} size={48} />
            <div>
              <p className="text-neutral-300">
                <Link href={`/user/${comment.user!.id}`}>
                  <a className="link">{comment.user!.login} </a>
                </Link>
                - {timeSince(comment.createdAt!)}
              </p>
              <p>{comment.body}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
