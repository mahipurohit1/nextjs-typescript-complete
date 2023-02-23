import AllPosts from "@/component/Posts/AllPosts";
import { getAllPosts } from "@/libs/posts-util";
interface propsData {
  AllData: {
    slug: string;
    title: string;
    date: string;
    image: string;
    description: string;
    content?: string;
  }[];
}
const AllPost: React.FC<propsData> = (props) => {
  return (
    <>
      <AllPosts posts={props.AllData}></AllPosts>
    </>
  );
};

export default AllPost;
export function getStaticProps() {
  const data = getAllPosts();

  return {
    props: {
      AllData: data,
    },
  };
}
