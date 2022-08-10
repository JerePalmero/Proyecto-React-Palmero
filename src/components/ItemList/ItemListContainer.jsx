import React, {useEffect, useState} from "react";
import dataProduct from "../../data/Items"
import Card from "../card/Card";

function getProductos() {
    return new Promise((resolve) =>  {
setTimeout ( ()=> resolve (dataProduct), 3000);
});
}

 export default function ItemListContainer ()  {
    const [data, setData] = useState([]); 

        useEffect(()=> {
            getProductos().then((respuesta) => {
                setData (respuesta);
            });
 }, []);
        
    
    return(
        <div>
            <p>Nuestro Viajes</p>
            <Card 
            imgurl={data.imgurl}
            name={data.name} 
            salida={data.salida}
            price={data.price}
            />
        </div>
        


            
    );
    }


