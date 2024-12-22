import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  Divider,
} from '@mui/material';
import axios from 'axios';
import { format } from 'date-fns';

const AddInventory = () => {
  const serverUrl = process.env.REACT_APP_SERVER_URL;
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const getFormatDate = (date) => format(date, 'yyyy-MM-dd');

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    image: noImage,
    name: '',
    user: '',
    quantity: 1,
    startDate: getFormatDate(today),
    endDate: getFormatDate(tomorrow),
  });

  const toggleOpen = () => setOpen(true);
  const toggleClose = () => setOpen(false);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(serverUrl, formData);
      console.log(response.data);
      toggleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="contained" onClick={toggleOpen}>
        Add Inventory
      </Button>
      <Dialog open={open} onClose={toggleClose}>
        <DialogTitle className="dialogTitle">Inventory Form</DialogTitle>
        <Divider />
        <DialogContent className="dialogForm">
          <Box>
            <TextField
              label="Start Date"
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInput}
            />
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInput}
            />
          </Box>
          <Box className="dialogInputBox">
            <TextField
              fullWidth
              label="Image URL"
              type="text"
              name="image"
              value={formData.image}
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="Product Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="User Name"
              type="text"
              name="user"
              value={formData.user}
              onChange={handleInput}
            />
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInput}
            />
          </Box>
          <Box className="dialogButtonBox">
            <Button variant="contained" onClick={toggleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddInventory;
