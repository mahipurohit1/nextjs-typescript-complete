import { useRouter } from "next/router";
import React from "react";

const ProductPage = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push("product/p1");
  };
  return (
    <div>
      ProductPage
      <div>
        <button onClick={clickHandler}>product detail </button>
      </div>
    </div>
  );
};

export default ProductPage;
