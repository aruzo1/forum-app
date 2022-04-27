import { IUser } from "lib/types";

const Profile = ({ user }: { user: IUser }) => (
  <div className="col-span-full card">{user?.login}</div>
);

export default Profile;
