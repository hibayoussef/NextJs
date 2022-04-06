import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { breakpoints } from "@mui/system";
import axios from "axios";
import products from "../pages/index";

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
    textDecoration: "none !important",
    color: "white",
  },
});
const deleteItem = async (id) => {
  await axios
    .delete(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log("data: ", res.data);
    })
    .catch((err) => {
      console.log("data error: ", err);
    });
};

const Product = ({ product }) => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));
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
        <Grid container direction={breakpoint ? "column" : "row"}>
          <Grid
            container
            xs={12}
            sm={8}
            style={{
              direction: "row",
              alignItems: "center",
            }}
          >
            {/* <div className={classes.button}> */}
            <Link href={`/products/${id}`}>
              <a className={classes.a}> More Details</a>
            </Link>
          </Grid>
          <Grid xs={12} sm={4}>
            <IconButton
              aria-label="delete"
              onClick={() => {
                deleteItem(product.id);
                console.log("id: ", id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Product;
