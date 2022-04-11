import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Dialog from "./Dialog";
import Product from "./Product";
import { getAllProducts, deleteProduct } from "../services/ECommerceServices";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  main: {
    padding: "4rem ",
  },
  typo: {
    color: "#ffc400 !impoertant",
  },
  // button: {
  //   textTransform: "none !important",
  //   backgroundColor: "#ffc400 !important",
  //   color: "white  !important",
  //   padding: 14,
  // },
});

function Products({ products }) {
  console.log("check: ", products);
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  //   const [pro, setProducts] = React.useState([]);

  function removeItem(index) {
    deleteProduct(index);
    let clone = [...products];
    clone.splice(index, 1);
  }

  return (
    <>
      <Head>
        <title>Solek</title>
      </Head>
      <Grid
        container
        direction={breakpoint ? "column" : "row"}
        style={{ margin: "4rem" }}
      >
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            // className={classes.typo}
            style={{ fontWeight: 600, color: "#ffc400" }}
          >
            Our Products
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sm={3}
          style={{
            direction: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Dialog />
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1, margin: 8 }}>
        <Grid container spacing={5}>
          {products?.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Item>
                {" "}
                <Product
                  key={product.id}
                  index={product.id}
                  product={product}
                  removeItem={removeItem}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
