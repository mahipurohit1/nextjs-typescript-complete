import { useRouter } from "next/router";
import React from "react";

const ClientPage = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("client/c1");
  };
  return (
    <div>
      ClientPage
      <div>
        <button onClick={clickHandler}> client Id </button>
      </div>
    </div>
  );
};

export default ClientPage;
