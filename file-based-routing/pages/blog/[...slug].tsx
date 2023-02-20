import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  const router = useRouter();
  console.log(router.query.slug);
  return <div>Blog</div>;
};

export default Blog;
