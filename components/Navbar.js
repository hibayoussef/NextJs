import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    margin: "4rem",
  },
  link: {
    textDecoration: "none",
    textTransform: "capitalize",
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffc400",
          padding: "0.5rem",
        }}
      >
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
          <Typography
            variant="h4"
            component="div"
            style={{
              fontWeight: "bold",

              fontFamily: "Rubik Moonrocks",
            }}
          >
            Solek
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ml: 10,
              direction: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              color="inherit"
              style={{
                fontWeight: "bold",
                fontSize: "1.3rem",
                fontFamily: "Rubik Moonrocks",

                textDecoration: "none",
                textTransform: "capitalize",
              }}
            >
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
