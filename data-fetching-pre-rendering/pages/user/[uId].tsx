import { GetServerSidePropsContext } from "next";
import React from "react";
interface propsData {
  username: string;
}
const userID: React.FC<propsData> = (props) => {
  return <div>{props.username}</div>;
};

export default userID;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const id = params!.uId;
  return {
    props: {
      username: `mahipal with ${id} id`,
    },
  };
}
