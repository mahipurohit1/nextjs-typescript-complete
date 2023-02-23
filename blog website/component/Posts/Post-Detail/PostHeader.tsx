import Image from "next/image";
import Style from "./post-header.module.css";
interface propsData {
  title: string;
  image: string;
}
const PostHeader: React.FC<propsData> = (props) => {
  const { title, image } = props;
  return (
    <header className={Style.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={150} width={200}></Image>
    </header>
  );
};

export default PostHeader;
