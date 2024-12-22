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

const App = () => {
  const [inventories, setInventories] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getInventory = async (url) => {
    try {
      const res = await axios.get(url);
      setInventories(res.data);
    } catch (err) {
      console.log(err);
      setInventories([]);
    }
  };

  const changeKeyword = async (newKeyword) => {
    setKeyword(newKeyword);
  };

  useEffect(() => {
    const serverUrl = process.env.REACT_APP_SERVER_URL;
    const url = keyword ? `${serverUrl}/user/${keyword}` : serverUrl;
    getInventory(url);
  }, [keyword]);

  return (
    <Paper className="root">
      <Header onSearch={changeKeyword} />
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
