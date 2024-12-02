import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Container title="물건 1" index="1" />
      <Container title="물건 2" index="2" />
      <Container title="물건 3" index="3" />
    </div>
  );
}

function Header() {
  return <h1>React 프로그래밍</h1>;
}

function ProductList() {
  return <div className="productList">KIT 재고 현황</div>;
}

function Container(props) {
  return (
    <div className="container">
      <img
        src={`https://picsum.photos/600/150?random=${props.index}`}
        alt={`랜덤 이미지 ${props.index}`}
      />
      <div className="product">{props.title}</div>
    </div>
  );
}

export default App;
