import React from 'react';
import { TableRow, TableCell } from '@mui/material';

class Inventory extends React.Component {
  render() {
    return (
      <TableRow>
        <TableCell>{this.props.inventory.id}</TableCell>
        <TableCell>
          <img src={this.props.inventory.image} alt="profile" />
        </TableCell>
        <TableCell>{this.props.inventory.name}</TableCell>
        <TableCell>{this.props.inventory.owner}</TableCell>
        <TableCell>{this.props.inventory.quantity}</TableCell>
        <TableCell>
          {this.props.inventory.startDate.toLocaleDateString()}
        </TableCell>
        <TableCell>
          {this.props.inventory.endDate.toLocaleDateString()}
        </TableCell>
      </TableRow>
    );
  }
}

export default Inventory;
