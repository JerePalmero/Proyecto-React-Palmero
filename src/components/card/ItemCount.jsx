
import React,{useState} from "react";

function ItemCount (Props) {
const [clicks, setClicks] = useState (1);

let topstock = () => {
    setClicks (Props.stock)
}
let topstock0 = () => {
    setClicks (1)
}

const HandleIncrement = () => {
    setClicks (clicks+1)
}
const HandleDecrement = () => {
    setClicks (clicks-1)
}
const Reset = () => {
    setClicks (0)
}
if (clicks > Props.stock){
    topstock(); 
}
if (clicks < 1){
    topstock0(); 
}

    return(
       <>

       <button onClick={ HandleIncrement  }>+</button>
       <button onClick={ HandleDecrement }>-</button>
       <button onClick={ Reset }>Reset</button>
       <h3>Clicks: {clicks}</h3>
       </> 
    )
}
export default ItemCount;