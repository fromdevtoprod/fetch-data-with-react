export type User = {
  id: string;
  name: string;
  bio: string;
  interests: string[];
  avatar: string;
};

export type UserDetail = User & {
  twitter: string;
  homepage: string;
  friends: User[];
};
