import './App.css';
import Container from './Container';

const App = () => {
  const products = ['물건1', '물건2', '물건3'];

  return (
    <div>
      <Header />
      <ProductList title="KIT 재고 현황" listProduct={products} />
    </div>
  );
};

const Header = () => {
  return <h1>React 프로그래밍</h1>;
};

const ProductList = (props) => {
  return (
    <div className="productList">
      <div className="productList">{props.title}</div>
      {props.listProduct.map((product, index) => (
        <Container key={index} title={product} index={index} />
      ))}
    </div>
  );
};

export default App;
