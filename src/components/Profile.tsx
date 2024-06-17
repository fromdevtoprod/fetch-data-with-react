import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import About from "./About.tsx";
import Friends from "./Friends.tsx";
import { use } from "../hooks/use.ts";
import { get } from "../api.ts";
import Loading from "./Loading.tsx";
import Error from "./Error.tsx";

export default function ProfileManager({ id }: { id: string }) {
  return (
    <ErrorBoundary fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Profile id={id} />
      </Suspense>
    </ErrorBoundary>
  );
}

function Profile({ id }: { id: string }) {
  const user = use(get(`users/${id}`));
  const friends = use(get(`users/${id}/friends`));
  return (
    <>
      <About user={user} />
      <Friends users={friends} />
    </>
  );
}
