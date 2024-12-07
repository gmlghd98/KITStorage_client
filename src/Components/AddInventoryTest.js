import { useState } from 'react';
import { Button, Modal, Box, TextField } from '@mui/material';

const AddInventoryTest = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    owner: '',
    quantity: 0,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => {
    console.log(formData);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen}>상품 추가</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="Add-Inventory-Field">
          <h2>상품 정보 입력</h2>
          <TextField
            label="상품 이름"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="소유자"
            variant="outlined"
            fullWidth
            margin="normal"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
          />
          <TextField
            label="수량"
            variant="outlined"
            fullWidth
            margin="normal"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
          />
          <Button variant="contained" onClick={handleSubmit}>
            저장
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default AddInventoryTest;
