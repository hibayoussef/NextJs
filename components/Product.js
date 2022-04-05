import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    backgroundColor: "#ffc400",
    padding: 5,
    textDecoration: "none",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();
  const { title, price, image, id } = product;
  return (
    <>
      <div style={{ padding: 13 }}>
        <div>
          <Image src={image} width="200" height="200" />
        </div>

        <div>{title}</div>
        <div>{price}$</div>
        <div className={classes.button}>
          <Link href={`/products/${id}`}>More Details</Link>
        </div>
      </div>
    </>
  );
};

export default Product;
