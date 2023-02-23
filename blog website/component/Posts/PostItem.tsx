import Image from "next/image";
import Link from "next/link";
import React from "react";
import Style from "./post-item.module.css";
interface propsData {
  postItem: {
    slug: string;
    title: string;
    image: string;
    date: string;
    description: string;
  };
}
const PostItem: React.FC<propsData> = (props) => {
  const { slug, title, image, date, description } = props.postItem;

  const ImagePath = `/images/posts/${slug}/${image}`;
  const FormattedDate = new Date(date).toLocaleString("en-us", {
    month: "long",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className={Style.post}>
      <Link href={`/posts/${slug}`}>
        <div className={Style.image}>
          {" "}
          <Image
            src={ImagePath}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          ></Image>
        </div>
        <div className={Style.content}>
          <h3>{title}</h3>
          <time>{FormattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default PostItem;
