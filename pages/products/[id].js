import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "@mui/system";
import Link from "@mui/material/Link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Breadcrumbs from "@mui/material/Breadcrumbs";

function handleClick(event) {
  event.preventDefault();
}

const SingleProduct = ({ product }) => {
  const { title, price, id, description, category, image } = product;
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div role="presentation" onClick={handleClick} style={{ margin: "3rem" }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="#ffc400" href="/">
            <ArrowBackIcon style={{ color: "#ffc400", fontSize: "1.5rem" }} />
            <Typography
              style={{ color: "#ffc400" }}
              variant="h5"
              component="span"
            >
              products
            </Typography>
          </Link>
        </Breadcrumbs>
      </div>

      <Card sx={{ margin: 5, marginTop: 14, padding: 8, boxShadow: 2 }}>
        <Grid container direction={breakpoint ? "column" : "row"}>
          {/* second Grid */}
          <Grid item xs={12} sm={3}>
            <Image alt="image" src={image} width="250" height="300" />
          </Grid>

          {/* first grid */}

          <Grid container item xs={12} sm={9} direction="row">
            <Grid item xs={12} sm={12}>
              <Typography
                component="div"
                variant="h5"
                style={{ marginBottom: "1rem" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {description}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                style={{
                  color: "#ffc400",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {price}$
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </>
  );
};

export default SingleProduct;

export async function getStaticPaths() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();
  return {
    props: {
      product,
    },
  };
}
