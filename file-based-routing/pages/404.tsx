import Link from "next/link";
import React from "react";

const PageNotFound = () => {
  return (
    <div>
      PageNotFound
      <div>
        <button>
          <Link href={"/"}> go back</Link>
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
