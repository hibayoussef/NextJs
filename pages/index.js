import Product from "../components/Product";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

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
    // marginTop: "4rem",
  },
  typo: {
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: "4rem",
  },
});

function Index({ products }) {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        component="div"
        className={classes.typo}
      >
        Our Products
      </Typography>
      <Box sx={{ flexGrow: 1 }} className={classes.main}>
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <Grid item xs={5} sm={4} md={3} key={index}>
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
