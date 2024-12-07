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

const inventories = [
  {
    id: 1,
    image: 'https://picsum.photos/64/64?random=1',
    name: '새우깡',
    owner: '홍길동',
    quantity: 10,
    startDate: new Date('2023-11-22'),
    endDate: new Date('2023-12-02'),
  },
  {
    id: 2,
    image: 'https://picsum.photos/64/64?random=2',
    name: '코카콜라',
    owner: '홍길동',
    quantity: 5,
    startDate: new Date('2023-11-25'),
    endDate: new Date('2023-12-10'),
  },
  {
    id: 3,
    image: 'https://picsum.photos/64/64?random=3',
    name: '사과',
    owner: '홍길동',
    quantity: 3,
    startDate: new Date('2023-11-28'),
    endDate: new Date('2023-12-05'),
  },
];

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
