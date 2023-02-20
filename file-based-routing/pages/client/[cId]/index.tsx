import { useRouter } from "next/router";
import React from "react";

const Client = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("c1/p1");
  };
  return (
    <div>
      Client with id : {router.query.cId}
      <div>
        <button onClick={clickHandler}> client product </button>
      </div>
    </div>
  );
};

export default Client;
