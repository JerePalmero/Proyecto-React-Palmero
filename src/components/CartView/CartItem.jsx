import React from "react";
import Button from "../Button/Button";

function CartItem({ title, img, price, moneda, quantity, total, removeItem }) {
  return (
    <tr>
      
      <td>{title}</td>
      <td>{moneda} {price}</td>
      <td>{quantity}</td>     
      <th>{moneda} {total}</th>
      <td>
        <Button type="alert" onTouch={removeItem}>
          X
        </Button>
      </td>
      
    </tr>
  );
}

export default CartItem;
