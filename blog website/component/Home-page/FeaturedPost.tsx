import PostsGrid from "../Posts/PostsGrid";
import Style from "./featured-posts.module.css";
interface propsData {
  posts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    description: string;
  }[];
}
const FeaturedPost: React.FC<propsData> = (props) => {
  return (
    <section className={Style.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts}></PostsGrid>
    </section>
  );
};

export default FeaturedPost;
