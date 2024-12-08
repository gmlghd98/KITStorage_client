import React from 'react';
import { TableRow, TableCell } from '@mui/material';

const Inventory = (props) => {
  // No state needed in this component, so we skip the useState hook

  return (
    <TableRow>
      <TableCell>{props.inventory.id}</TableCell>
      <TableCell>
        <img src={props.inventory.image} alt="profile" />
      </TableCell>
      <TableCell>{props.inventory.name}</TableCell>
      <TableCell>{props.inventory.owner}</TableCell>
      <TableCell>{props.inventory.quantity}</TableCell>
      <TableCell>{props.inventory.startDate.toLocaleDateString()}</TableCell>
      <TableCell>{props.inventory.endDate.toLocaleDateString()}</TableCell>
    </TableRow>
  );
};

export default Inventory;
