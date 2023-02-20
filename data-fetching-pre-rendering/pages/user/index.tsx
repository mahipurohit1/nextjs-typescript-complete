import React from "react";
interface propsData {
  username: string;
}
const user: React.FC<propsData> = (props) => {
  return <h2>{props.username}</h2>;
};

export default user;

export async function getServerSideProps() {
  return {
    props: {
      username: "mahi",
    },
  };
}
