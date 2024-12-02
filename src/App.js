import './App.css';

function App() {
  return (
    <div>
      <Header />
      <ProductList />
      <Container />
    </div>
  );
}

function Header() {
  return <h1>React 프로그래밍</h1>;
}

function ProductList() {
  return <div className="productList">KIT 재고 현황</div>;
}

function Container() {
  return (
    <div className="container">
      <img src="https://picsum.photos/600/150?random=1" alt="랜덤 이미지 1" />
      <div className="product">물건</div>
    </div>
  );
}

export default App;
