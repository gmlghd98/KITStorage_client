import './App.css';
import Container from './Container';

const App = () => {
  return (
    <div>
      <Header />
      <ProductList />
      <Container title="물건 1" index="1" />
      <Container title="물건 2" index="2" />
      <Container title="물건 3" index="3" />
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const ProductList = () => {
  return <div className="productList">KIT 재고 현황</div>;
};

export default App;
