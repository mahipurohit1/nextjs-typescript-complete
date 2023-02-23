import PostContent from "@/component/Posts/Post-Detail/PostContent";
import { getPostData } from "@/libs/posts-util";
import { GetServerSidePropsContext } from "next";
import React from "react";

interface propsData {
  AllData: {
    slug: string;
    title: string;
    date: string;
    image: string;
    description: string;
    content: string;
  };
}
const PostDetail: React.FC<propsData> = (props) => {
  return <PostContent post={props.AllData}></PostContent>;
};

export default PostDetail;

export function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const slugId = params!.slug;
  const data = getPostData(slugId);

  return {
    props: {
      AllData: data,
    },
  };
}
