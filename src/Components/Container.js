import { useState } from 'react';

const Container = (props) => {
  return (
    <>
      <div className="container">
        <img
          src={`https://picsum.photos/600/150?random=${props.product.id}`}
          alt={`랜덤 이미지 ${props.product.id}`}
        />
        <div className="product">{`${props.product.name} (${props.product.owner})`}</div>
        <div className="product-quantity">{props.product.quantity}</div>
      </div>
      <pre className="dates">
        {props.product.startDate.toLocaleDateString()} ~{' '}
        {props.product.endDate.toLocaleDateString()}
      </pre>
    </>
  );
};

export default Container;
