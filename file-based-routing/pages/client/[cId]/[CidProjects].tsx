import { useRouter } from "next/router";
import React from "react";

const clientWithProject = () => {
  const router = useRouter();
  
  return (
    <div>
      clientWithProject client with id {router.query.cId} with projects id is
      {router.query.CidProjects}
    </div>
  );
};

export default clientWithProject;
