import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from '@mui/material';

const AddInventory = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Add Inventory
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Inventory</DialogTitle>
        <DialogContent className="dialogContent">
          <Button variant="contained" component="label">
            상품 이미지 추가
            <input type="file" hidden />
          </Button>
          <br/>
          <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
          >
            <TextField
              label="시작 날짜"
              type="date"
              name="startDate"
              defaultValue={today.toISOString().slice(0, 10)}
            />
            <TextField
              label="종료 날짜"
              type="date"
              name="endDate"
              defaultValue={tomorrow.toISOString().slice(0, 10)}
            />
            <TextField
              fullWidth
              margin="normal"
              label="상품명"
              type="text"
              name="name"
            />
            <TextField label="소유자" type="text" name="owner" />
            <TextField label="수량" type="number" name="quantity" />
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AddInventory;
