import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import axios from "axios";

const useStyles = makeStyles({
  button: {
    textTransform: "none !important",
    backgroundColor: "#ffc400 !important",
    color: "white  !important",
    padding: 14,
  },
  buttonUpload: {
    backgroundColor: "#ffc400 !important",
    color: "white  !important",
  },
  diaButton: {
    textTransform: "none !important",
    color: "#ffc400 !important",
    padding: 14,
    fontWeight: 500,
  },
});

const submitDetails = async (title, price, description, image, category) => {
  return await axios("https://fakestoreapi.com/products", {
    title,
    price,
    description,
    image,
    category,
  }).then((res) => {
    console.log("response: ", res.data);
  });
};
export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className={classes.button} onClick={handleClickOpen}>
        Add New Product
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: 14 }}>
            Please fill in the fields to create a product.
          </DialogContentText>
          <input
            accept="image/*"
            type="file"
            id="select-image"
            style={{ display: "none" }}
          />
          <label htmlFor="select-image">
            <Button
              className={classes.buttonUpload}
              variant="contained"
              component="span"
            >
              Upload Image
            </Button>
          </label>

          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.diaButton}
            onClick={submitDetails(price, description, category, title, image)}
          >
            Create
          </Button>
          <Button className={classes.diaButton} onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
