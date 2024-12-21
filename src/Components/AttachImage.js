import { Button } from '@mui/material';

const AttachImage = () => {
  return (
    <Button variant="contained" component="label">
      Add Image
      <input type="file" hidden />
    </Button>
  );
};

export default AttachImage;
