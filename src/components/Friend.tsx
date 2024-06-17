import { lazy } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { User } from "../types";
import UserBrief from "./Brief";

const UserDetailsCard = lazy(() => import("./UserDetailsCard"));

export default function Friend({ user }: { user: User }) {
  return (
    <Popover placement="bottom" showArrow offset={10}>
      <PopoverTrigger>
        <button
          className="flex flex-col items-center"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <UserBrief user={user} />
        </button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[240px] min-w-[200px] max-h-40 min-h-32">
        <UserDetailsCard id={user.id} />
      </PopoverContent>
    </Popover>
  );
}
