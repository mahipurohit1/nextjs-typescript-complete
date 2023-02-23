import React from "react";
import Style from "./all-posts.module.css";
import PostsGrid from "./PostsGrid";
interface propsData {
  posts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    description: string;
  }[];
}
const AllPosts: React.FC<propsData> = (props) => {
  return (
    <section className={Style.posts}>
      <h2>All Posts</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
};

export default AllPosts;
