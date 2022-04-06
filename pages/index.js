import Product from "../components/Product";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Head from "next/head";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  main: {
    padding: "4rem !important",
  },
  typo: {
    color: "#ffc400 !impoertant",
    fontWeight: 600,
  },
  button: {
    textTransform: "none",
    backgroundColor: "#ffc400",
    color: "white",
    padding: 14,
  },
});

function Index({ products }) {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
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
            style={{ color: "#ffc400 !impoertant", fontWeight: 600 }}
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
          <Button className={classes.button}>Add New Product</Button>
        </Grid>
      </Grid>
      <Box sx={{ flexGrow: 1, margin: 8 }}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Item>
                {" "}
                <Product key={product.id} product={product} />;
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Index;

export async function getStaticProps() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();

  // console.log("response that comes from backend: ", req);

  return {
    props: {
      products,
    },
  };
}
