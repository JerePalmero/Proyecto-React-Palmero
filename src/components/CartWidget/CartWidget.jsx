import React from "react";
import carrito from "../../assets/images/carrito.png";

function CartWidget(){
  return(
      <div class="carrito-cont">
          <img src={carrito} alt="carrito" class="carrito" width="25px"/>
      </div>
  )
}

export default CartWidget
