
import dataProduct from '../ItemList/Items'
import CardDetail from './ItemDetail';
import React, {useEffect, useState} from "react";


function getProducts() {
    return new Promise((resolve) =>  {
setTimeout ( ()=> resolve (dataProduct[0]), 2000);
});
}

function ItemDetailContainer() {
    const [items, setItems] = useState([]); 

    useEffect(()=> {
        getProducts().then((respuesta) => {
            setItems (respuesta);
        });
}, []);


  return (
    <div className="main">
        {items.map((prod) => {
        return (
          <CardDetail
            id={prod.id}
            name={prod.name}
            price={prod.price}
            imgurl={prod.imgurl}
            
          />
        );
      })}
    </div>
  )
}

export default ItemDetailContainer