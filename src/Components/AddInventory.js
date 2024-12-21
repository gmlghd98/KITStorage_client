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

const AddInventory = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    quantity: 0,
    startDate: today.toISOString().slice(0, 10),
    endDate: tomorrow.toISOString().slice(0, 10),
  });

  const toggleOpen = () => setOpen(true);
  const toggleClose = () => setOpen(false);
  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/inventory', formData); // 서버 API 엔드포인트로 요청
      console.log('Inventory added successfully:', response.data);
      toggleClose(); // 다이얼로그 닫기
    } catch (error) {
      console.error('Error adding inventory:', error);
      // 오류 처리 (예: 사용자에게 오류 메시지 표시)
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
              defaultValue={today.toISOString().slice(0, 10)}
            />
            <TextField
              label="End Date"
              type="date"
              name="endDate"
              defaultValue={tomorrow.toISOString().slice(0, 10)}
            />
          </Box>
          <Box className="dialogInputBox">
            <TextField fullWidth label="Product Name" type="text" name="name" />
            <TextField fullWidth label="Owner" type="text" name="owner" />
            <TextField
              fullWidth
              label="Quantity"
              type="number"
              name="quantity"
            />
          </Box>
          <Box className="dialogButtonBox">
            <Button variant="contained" onClick={toggleClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={toggleClose}>
              Submit
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddInventory;
