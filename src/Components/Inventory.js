import React from 'react';
import { TableRow, TableCell, Button } from '@mui/material';
import { format } from 'date-fns';

const Inventory = ({ index, inventory }) => {
  return (
    <TableRow>
      <TableCell align="center">{index}</TableCell>
      <TableCell align="center">
        <img className="inventoryImage" src={inventory.image} alt="profile" />
      </TableCell>
      <TableCell align="center">{inventory.name}</TableCell>
      <TableCell align="center">{inventory.user}</TableCell>
      <TableCell align="center">{inventory.quantity}</TableCell>
      <TableCell align="center">
        {format(new Date(inventory.startDate), 'yyyy-MM-dd')}
      </TableCell>
      <TableCell align="center">
        {format(new Date(inventory.endDate), 'yyyy-MM-dd')}
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" color="primary">
          Edit
        </Button>
        <Button sx={{ marginLeft: 1 }} variant="contained" color="primary">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default Inventory;
