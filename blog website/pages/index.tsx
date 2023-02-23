import FeaturedPost from "@/component/Home-page/FeaturedPost";
import Hero from "@/component/Home-page/Hero";
import { getFeaturedPosts } from "../libs/posts-util";

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

const HomePage: React.FC<propsData> = (props) => {
  return (
    <>
      <Hero />
      <FeaturedPost posts={props.AllData} />
    </>
  );
};

export default HomePage;

export function getStaticProps() {
  const data = getFeaturedPosts();

  return {
    props: {
      AllData: data,
    },
  };
}
