import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Divider,
  Box,
} from '@mui/material';
import axios from 'axios';

const DeleteInventory = ({ inventory }) => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const [open, setOpen] = useState(false);

  // const toggleOpen = () => setOpen(true);
  const toggleOpen = () => {
    console.log(inventory);
    setOpen(true);
  };
  const toggleClose = () => setOpen(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`${serverUrl}/${inventory.id}`);
      toggleClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        className="inventoryAction"
        variant="contained"
        onClick={toggleOpen}
      >
        Delete
      </Button>
      <Dialog open={open} onClose={toggleClose}>
        <DialogTitle className="dialogTitle">
          Are you sure to delete the inventory?
        </DialogTitle>
        <Divider />
        <DialogContent className="dialogForm">
          <Box className="dialogButtonBox">
            <Button variant="contained" onClick={toggleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleDelete}>
              Confirm
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeleteInventory;
