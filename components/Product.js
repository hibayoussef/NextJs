import * as React from "react";
import Button from "@mui/material/Button";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

const useStyles = makeStyles({
  button: {
    textTransform: "none",
    backgroundColor: "#ffc400",
    color: "white",
    padding: 14,
    borderRadius: "10px",
    marginTop: 9,
  },
  linkStyle: {
    textDecoration: "none",
    color: "white",
    backgroundColor: "#ffc400",
  },
});

const Product = ({ index, removeItem, product }) => {
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const { title, price, image, id } = product;
  return (
    <>
      {/* <div style={{ padding: 13 }}> */}
      <Grid
        container
        // direction={breakpoint ? "row" : "row"}
        style={{ padding: 10 }}
      >
        <Grid item>
          <Grid item>
            {/* <div style={{ paddingBottom: 6 }}> */}
            <Image alt="image" src={image} width="200" height="200" />
            {/* </div> */}
          </Grid>
          <Grid item style={{ paddingBottom: 6 }}>
            {title}
          </Grid>
          <Grid item style={{ paddingBottom: 6 }}>
            {price}$
          </Grid>
        </Grid>

        <Grid
          container
          direction={breakpoint ? "column" : "row"}
          style={{ paddingLeft: 2 }}
        >
          <Grid
            item
            xs={12}
            sm={8}
            style={{ paddingTop: 9 }}
            // className={classes.linkStyle}
          >
            <Link style={{ textDecoration: "none" }} href={`/products/${id}`}>
              <a style={{ textDecoration: "none" }}>
                {" "}
                <span
                  style={{
                    color: "white",
                    backgroundColor: "#ffc400",
                    padding: 10,
                  }}
                >
                  More Details
                </span>{" "}
              </a>
            </Link>
          </Grid>

          <Grid item xs={12} sm={4}>
            <IconButton
              aria-label="delete"
              onClick={() => {
                removeItem(index);
                console.log("id: ", index);
              }}
            >
              <DeleteIcon style={{ color: "red" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      {/* </div> */}
    </>
  );
};

export default Product;
