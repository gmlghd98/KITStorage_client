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
      <AddInventory />
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>소유자</TableCell>
            <TableCell>수량</TableCell>
            <TableCell>시작 일자</TableCell>
            <TableCell>종료 일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {inventories.map((inventory) => (
            <Inventory key={inventory.id} inventory={inventory} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default App;
