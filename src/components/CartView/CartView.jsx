import { useContext } from "react";
import { cartContext } from "../../store/cartContext";
import UserForm from "../UserForm/UserForm";
import CartItem from "./CartItem";
import "./cartview.css";

function CartView() {
  const { cart, removeFromCart } = useContext(cartContext);

  return (
    <>
      <div className="main container mx-auto mt-5">
        <h1 className="titulo">Tu Carrito</h1>
        <table>
          <thead>
            <tr>
              
              <th>Viaje</th>
              <th>Precio</th>
              <th>Pasajeros</th>             
              <th>Total</th>
              <th>Remover</th>

            </tr>
          </thead>
          <tbody className="trop">
            {cart.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  title={item.title}
                  moneda={item.moneda}
                  price={item.price}
                  total={item.price * item.quantity}
                  
                  quantity={item.quantity}
                  removeItem={() => removeFromCart(item.id)}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      
      <UserForm cart={cart} />
    </>
  );
}

export default CartView;
