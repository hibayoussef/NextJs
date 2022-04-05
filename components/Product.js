import Image from "next/image";

const Product = ({ product }) => {
  const { title, price, image, id } = product;
  return (
    <>
      <div>
        <Image src={image} width="200" height="200" />
      </div>

      <div>{title}</div>

      <div>{price}</div>
    </>
  );
};

export default Product;
