import { User } from "../types";
import Friend from "./Friend";

export default function Friends({ users }: { users: User[] }) {
  return (
    <div className="py-4">
      <h2 className="text-lg text-slate-900 tracking-wider">Friends</h2>
      <div className="flex flex-row pt-4 gap-4">
        {users.map((user: User) => (
          <Friend user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
