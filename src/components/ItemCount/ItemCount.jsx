import React, { useState } from "react";

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
      <h3>Disponible AHORA</h3>
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      <button onClick={()=>props.onAdd(count)}>Reserva</button>
    </>
  );
}

export default ItemCount;
