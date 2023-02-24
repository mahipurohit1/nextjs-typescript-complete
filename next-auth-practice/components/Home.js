import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const signOutHandler = () => {
    console.log("click");
    signOut();
  };

  const signHandler = () => {
    router.push("/auth");
  };

  return <>{session ? user(session, signOutHandler) : guest(signHandler)}</>;
};

export default Home;

function user(props, signOutHandler) {
  return (
    <>
      <h1> Welcome {props.user.name}</h1>
      <button onClick={() => signOutHandler()}>Sign Out</button>
    </>
  );
}

function guest(signHandler) {
  return (
    <>
      <h1> Welcome Guest</h1>
      <button
        onClick={() => {
          signHandler();
        }}
      >
        Sign In
      </button>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  return {
    props: {
      session: session,
    },
  };
}
