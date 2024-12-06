import React, { Component } from 'react';
import Inventory from './Components/Inventory';
import './App.css';

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
    owner: '이순신',
    quantity: 5,
    startDate: new Date('2023-11-25'),
    endDate: new Date('2023-12-10'),
  },
  {
    id: 3,
    image: 'https://picsum.photos/64/64?random=3',
    name: '사과',
    owner: '강감찬',
    quantity: 3,
    startDate: new Date('2023-11-28'),
    endDate: new Date('2023-12-05'),
  },
];

class App extends Component {
  render() {
    return (
      <div>
        {inventories.map((inventory) => (
          <Inventory key={inventory.id} inventory={inventory} />
        ))}
      </div>
    );
  }
}

export default App;
