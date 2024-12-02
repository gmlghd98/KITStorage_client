const Container = (props) => {
  return (
    <div className="container">
      <img
        src={`https://picsum.photos/600/150?random=${props.index}`}
        alt={`랜덤 이미지 ${props.index}`}
      />
      <div className="product">{props.title}</div>
    </div>
  );
};

export default Container;
