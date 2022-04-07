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
    backgroundColor: "#ffc400 !important",
    color: "white",
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

export default function FormDialog() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const newLocal = false;
  const [selectedFile, setSelectedFile] = React.useState(newLocal);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");

  function fileSelectedHandler(event) {
    console.log(event.target.files[0]);
    selectedFile: event.target.files[0], setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = async ({
    title,
    price,
    description,
    image,
    category,
  }) => {
    console.log("title: ", title);
    console.log("price: ", price);
    console.log("description: ", description);
    console.log("image: ", image);
    console.log("category: ", category);
    const fd = new FormData();
    fd.append("image", setSelectedFile);
    // I think what you missing is the header to inform the axios as multi part request
    fd.append(
      "data",
      JSON.stringify({ title, price, description, image, category })
    );
    const response = await axios.post("https://fakestoreapi.com/products", fd, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });

    console.log(response);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSendMsg = () => {
    handleClose();
    fileUploadHandler();
  };

  return (
    <div>
      <Button
        className={classes.button}
        style={{ padding: 14 }}
        onClick={handleClickOpen}
      >
        Add New Product
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>

        <DialogContent>
          <DialogContentText style={{ marginBottom: 14 }}>
            Please fill in the fields to create a product.
          </DialogContentText>
          {/* <input
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
          </label> */}

          {/* <input type="file" onChange={fileSelectedHandler} /> */}

          <input
            type="file"
            id="select-image"
            style={{ display: "none" }}
            // value={selectedFile}
            onChange={fileSelectedHandler}
          />
          <label htmlFor="select-image">
            <Button variant="contained" color="primary" component="span">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="category"
            label="Category"
            type="text"
            fullWidth
            variant="standard"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button
            className={classes.diaButton}
            // onClick={handleClose}
            // type="submit"
            onClick={fileUploadHandler}
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
