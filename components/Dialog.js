import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { config } from "../config";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const newLocal = false;
  const [selectedFile, setSelectedFile] = React.useState(newLocal);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [category, setCategory] = React.useState("");

  function fileSelectedHandler(event) {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = async () => {
    console.log(selectedFile);
    const fd = new FormData();
    fd.append("image", selectedFile);
    fd.append("data", JSON.stringify({ title, price, description, category }));
    await axios.post(`${config.baseURL}`, fd, {
      headers: {
        "Content-type": "multipart/form-data",
      },
    });
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        style={{
          padding: 14,
          backgroundColor: "#ffc400 !important",
          color: "white",
        }}
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

          <input
            type="file"
            id="select-image"
            style={{ display: "none" }}
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
            style={{
              textTransform: "none !important",
              color: "#ffc400 !important",
              padding: 14,
              fontWeight: 500,
            }}
            onClick={fileUploadHandler}
          >
            Create
          </Button>
          <Button
            style={{
              textTransform: "none !important",
              color: "#ffc400 !important",
              padding: 14,
              fontWeight: 500,
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
