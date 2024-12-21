import { useEffect, useState } from 'react';
import Inventory from './Components/Inventory';
import AddInventory from './Components/AddInventory';
import Header from './Components/Header';
import './App.css';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8080/api/inventories';

const App = () => {
  const [inventories, setInventories] = useState([]);

  const getInventory = async () => {
    try {
      const res = await axios.get(SERVER_URL);
      console.log(res);
      setInventories(res.data);
    } catch (err) {
      console.log(err);
      setInventories([]);
    }
  };

  useEffect(() => {
    getInventory();
  }, []);

  const handleSearch = async (keyword) => {
    if (!keyword) {
      getInventory();
      return;
    }
    const filteredUrl = `${SERVER_URL}/user/${keyword}`;
    try {
      const res = await axios.get(filteredUrl);
      console.log(res);
      setInventories(res.data);
    } catch (err) {
      console.log(err);
      setInventories([]);
    }
  };

  return (
    <Paper className="root">
      <Header onSearch={handleSearch} />
      <br />
      <AddInventory />
      <Table>
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
