import Card from "../card/Card"
import getProducts from "../../Helpers/getProducts";
import React, {useEffect, useState} from "react";


export default function ItemList (){ 
    const [data, setData] = useState([]); 

        useEffect(()=> {
            getProducts().then((respuesta) => {
                setData (respuesta);
            });
 }, []);
    return (
<div>
        {
            data.map((singleMovie)=> (
                <Card 
                key={singleMovie.id}
                imgurl={singleMovie.imgurl}
                name={singleMovie.name} 
                salida={singleMovie.salida}
                price={singleMovie.price}
                />
            ) )
        }
        </div>
    )
    }