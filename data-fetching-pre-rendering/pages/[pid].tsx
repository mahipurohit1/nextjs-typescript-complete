import fs from "fs/promises";
import { GetStaticPropsContext } from "next";
import path from "path";

interface propsData {
  product: {
    id: string;
    title: string;
    description: string;
  };
}

const ProductDetailPage: React.FC<propsData> = (props) => {
  return (
    <>
      <h2>{props.product.title}</h2>
      <p>{props.product.description}</p>
    </>
  );
};

export default ProductDetailPage;

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const res = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(res);

  const ids = data.products.map(
    (product: { id: string; title: string; description: string }) => {
      return product.id;
    }
  );
  const pathsId = ids.map((id: string) => {
    return {
      params: {
        pid: `${id}`,
      },
    };
  });
  console.log(pathsId);

  return {
    paths: pathsId,
    fallback: false,
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { params } = context;
  const id = params!.pid;
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const res = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(res);
  const selectedProduct = data.products.find(
    (product: { id: string; title: string; description: string }) =>
      product.id === id
  );

  return {
    props: {
      product: selectedProduct,
    },
  };
}
