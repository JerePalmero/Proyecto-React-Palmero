import Card from "../card/Card"
import getProducts from "../../Helpers/getProducts";
import React, {useEffect, useState} from "react";
import "./ItemListConteiner.css";

export default function ItemList (){ 
    const [data, setData] = useState([0]); 

        useEffect(()=> {
            getProducts().then((respuesta) => {
                setData (respuesta);
            });
 }, []);
    return (
<div className="card-arm">
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