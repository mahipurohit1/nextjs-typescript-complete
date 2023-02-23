import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { UserProfile } from "../components/profile/UserProfile";

export default function Profile() {
  return <UserProfile />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (!session)
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };

  return { props: { session } };
};
