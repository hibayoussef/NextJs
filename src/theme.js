import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      "Montserrat",
      "sans-serif",
      "Open Sans",
      "sans-serif",
      "Raleway",
      "sans-serif",
      "Roboto",
      "sans-serif",
      "Rubik Moonrocks",
      "cursive",
      "Send Flowers",
      "cursive",
    ].join(","),
    fontWeight: 700,
  },
});

export default theme;
