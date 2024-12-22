import { TableRow, TableCell } from '@mui/material';

const InventoryHeader = () => {
  const headers = [
    'No.',
    'Image',
    'Name',
    'User',
    'Quantity',
    'Start Date',
    'End Date',
    'Action',
  ];
  return (
    <TableRow>
      {headers.map((header, index) => (
        <TableCell align="center" key={index}>
          {header}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default InventoryHeader;
