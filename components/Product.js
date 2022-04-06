import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    backgroundColor: "#ffc400",
    color: "white",
    padding: 14,
    borderRadius: "10px",
    marginTop: 9,
  },
  a: {
    textDecoration: "none",
    color: "white",
  },
});

const Product = ({ product }) => {
  const classes = useStyles();
  const { title, price, image, id } = product;
  return (
    <>
      <div style={{ padding: 13 }}>
        <div style={{ paddingBottom: 6 }}>
          <Image src={image} width="200" height="200" />
        </div>

        <div style={{ paddingBottom: 6 }}>{title}</div>
        <div style={{ paddingBottom: 6 }}>{price}$</div>
        <div className={classes.button}>
          <Link href={`/products/${id}`}>
            <a className={classes.a}> More Details</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
