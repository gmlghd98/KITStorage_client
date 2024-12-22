import React from 'react';
import { TableRow, TableCell } from '@mui/material';
import { format } from 'date-fns';
import DeleteInventory from './DeleteInventory';

const Inventory = ({ index, inventory }) => {
  const getFormatDate = (date) => format(date, 'yyyy-MM-dd');

  return (
    <TableRow>
      <TableCell align="center">{index}</TableCell>
      <TableCell align="center">
        <img className="inventoryImage" src={inventory.image} alt="profile" />
      </TableCell>
      <TableCell align="center">{inventory.name}</TableCell>
      <TableCell align="center">{inventory.user}</TableCell>
      <TableCell align="center">{inventory.quantity}</TableCell>
      <TableCell align="center">{getFormatDate(inventory.startDate)}</TableCell>
      <TableCell align="center">{getFormatDate(inventory.endDate)}</TableCell>
      <TableCell align="center">
        <DeleteInventory inventory={inventory} />
      </TableCell>
    </TableRow>
  );
};

export default Inventory;
