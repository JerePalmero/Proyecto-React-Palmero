import React, { useState } from "react";
import Button from "../Button/Button";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      
      <Button type="alert" onTouch={handleDecrement}>
        -
      </Button>
      <strong>{count}</strong>
      <Button onTouch={handleIncrement}>+</Button>
      <br />
      <Button onTouch={() => props.onAdd(count)}>Hacer Reserva</Button>
    </>
  );
}

export default ItemCount;
