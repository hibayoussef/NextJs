import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  groupButton: {
    marginLeft: "auto",
  },
  lowerCase: {
    textDecoration: "none",
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            Solek
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: 10,
            }}
            className={classes.groupButton}
          >
            <Button color="inherit">
              <Link href="/">Home</Link>
            </Button>
            <Button color="inherit">
              <Link href="/about">About me</Link>
            </Button>
            <Button color="inherit">
              <Link href="/cart">Cart</Link>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
