import PostItem from "./PostItem";
import Style from "./posts-grid.module.css";
interface propsData {
  posts: {
    slug: string;
    title: string;
    image: string;
    date: string;
    description: string;
  }[];
}
const PostsGrid: React.FC<propsData> = (props) => {
  return (
    <ul className={Style.grid}>
      {props.posts.map((post) => {
        return (
          <li key={post.slug}>
            {" "}
            <PostItem postItem={post}></PostItem>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsGrid;
