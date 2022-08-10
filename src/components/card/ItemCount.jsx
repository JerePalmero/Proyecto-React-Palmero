
import React,{useState} from "react";

function ItemCount (Props) {
const [clicks, setClicks] = useState (1);

let topstock = () => {
    setClicks (Props.stock);
}
const HandleIncrement = () => {
     setClicks (clicks+1)
}
const HandleDecrement = () => {
    setClicks (clicks-1)
}
const Reset = () => {
    setClicks (Props.initial)
}
if (clicks > Props.stock){
    topstock(); 
}
if (clicks < Props.initial){
    setClicks(Props.initial); 
}

    return(
       <>

       <button onClick={ HandleIncrement  }>+</button>
       <button onClick={ HandleDecrement }>-</button>
       <button onClick={ Reset }>Reset</button>
       <h3>Cantidad Seleccionada: {clicks}</h3>
       </> 
    )
}
export default ItemCount;