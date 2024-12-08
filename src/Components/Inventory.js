import React from 'react';
import { TableRow, TableCell, Button, Box } from '@mui/material';

const Inventory = (props) => {
  return (
    <TableRow>
      <TableCell align="center">{props.index}</TableCell>
      <TableCell align="center">
        <img width={64} height={64} src={props.inventory.image} alt="profile" />
      </TableCell>
      <TableCell align="center">{props.inventory.name}</TableCell>
      <TableCell align="center">{props.inventory.owner}</TableCell>
      <TableCell align="center">{props.inventory.quantity}</TableCell>
      <TableCell align="center">
        {props.inventory.startDate.toLocaleDateString()}
      </TableCell>
      <TableCell align="center">
        {props.inventory.endDate.toLocaleDateString()}
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
