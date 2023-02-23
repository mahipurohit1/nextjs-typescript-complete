import ReactMarkdown from "react-markdown";
import Style from "./post-content.module.css";
import PostHeader from "./PostHeader";
interface propsData {
  post: {
    slug: string;
    title: string;
    date: string;
    image: string;
    description: string;
    content: string;
  };
}
const PostContent: React.FC<propsData> = (props) => {
  const imgPath = `/images/posts/${props.post.slug}/${props.post.image}`;

  return (
    <article className={Style.content}>
      <PostHeader title={props.post.title} image={imgPath}></PostHeader>
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
