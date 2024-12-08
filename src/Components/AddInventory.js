import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
} from '@mui/material';

const AddInventory = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [open, setOpen] = useState(false);
  const toggleOpen = () => setOpen(true);
  const toggleClose = () => setOpen(false);

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleOpen}>
        Add Inventory
      </Button>
      <Dialog open={open} onClose={toggleClose}>
        <DialogContent
          className="dialogContent"
          sx={{
            gap: 2,
          }}
        >
          <Button variant="contained" component="label">
            Add Image
            <input type="file" hidden />
          </Button>
          <Box
            component="form"
            sx={{
              display: 'flex',
              gap: 1,
            }}
          >
            <TextField
              label="Start Date"
              type="date"
              name="startDate"
              defaultValue={today.toISOString().slice(0, 10)}
            />
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              defaultValue={tomorrow.toISOString().slice(0, 10)}
            />
          </Box>
          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
          >
            <TextField fullWidth label="Product Name" type="text" name="name" />
            <TextField fullWidth label="Owner" type="text" name="owner" />
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              name="quantity"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={toggleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddInventory;
