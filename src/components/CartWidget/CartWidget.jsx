import React from "react";
import carrito from "../../assets/image/carrito.png"
import "./CartWidget.css";



function CartWidget(){
    return(
        <div class="carrito-cont">
            <img src={carrito} alt="carrito" class="carrito" width="25px"/>
        </div>
    )
}

export default CartWidget