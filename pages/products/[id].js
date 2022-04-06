import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { breakpoints } from "@mui/system";

const singleProduct = ({ product }) => {
  const { title, price, id, description, category, image } = product;
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card sx={{ margin: 5, padding: 8, boxShadow: 2 }}>
      <Grid container direction={breakpoint ? "column" : "row"}>
        {/* second Grid */}
        <Grid xs={12} sm={3}>
          <Image src={image} width="250" height="300" />
        </Grid>

        {/* first grid */}

        <Grid xs={12} sm={9} direction="row">
          <Grid xs={12} sm={12}>
            <Typography
              component="div"
              variant="h5"
              style={{ marginBottom: "1rem" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {description}
            </Typography>
          </Grid>
          <Grid xs={12} sm={12}>
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
  );
};

export default singleProduct;

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
