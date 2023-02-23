import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { AuthForm } from "../components/auth/AuthForm";

export default function Auth() {
  return <AuthForm />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession({ req: context.req });

  if (session) return { redirect: { destination: "/", permanent: false } };

  return { props: {} };
};
