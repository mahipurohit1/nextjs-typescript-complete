import fs from "fs/promises";
import Link from "next/link";
import path from "path";
interface propsData {
  products: {
    id: string;
    title: string;
    description: string;
  }[];
}
const HomePage: React.FC<propsData> = (props) => {
  return (
    <ul>
      {props.products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const res = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(res);

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: data.products,
    },
    revalidate: 20,
  };
}
