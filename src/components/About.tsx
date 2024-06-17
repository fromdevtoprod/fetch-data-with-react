import { User } from "../types.ts";

export default function About({ user }: { user: User }) {
  return (
    <div className="flex flex-row gap-2 pb-4 items-center">
      <div>
        <img
          src={`https://i.pravatar.cc/150?u=${user.id}`}
          alt={`User ${user.name} avatar`}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div>
        <div className="text-2xl font-bold">{user.name}</div>
        <p className="text-xs">{user.bio}</p>
      </div>
    </div>
  );
}
