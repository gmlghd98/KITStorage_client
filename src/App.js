import { useState } from 'react';
import Inventory from './Components/Inventory';
import AddInventory from './Components/AddInventory';
import NavigationDrawer from './Components/NavigationDrawer';
import NavigationBar from './Components/NavigationBar';
import './App.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import Repository from './Repository';

const inventories = Repository.inventories;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Paper className="root">
      <NavigationBar onMenuClick={toggleDrawer} />
      <NavigationDrawer open={isOpen} onClose={toggleDrawer} />
      <br />
      <AddInventory />
      <Table>
        {/* className="table" */}
        <TableHead>
          <TableRow>
            <TableCell align="center">No.</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">User</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Start Date</TableCell>
            <TableCell align="center">End Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventories.map((inventory, index) => (
            <Inventory
              key={inventory.id}
              index={index + 1}
              inventory={inventory}
            />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default App;
