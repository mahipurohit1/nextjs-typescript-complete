import { useRouter } from "next/router";
import React from "react";

const ProductDetailsPage = () => {
  const router = useRouter();
  console.log(router.query.productId);
  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
