import Card from "../card/Card"
import GetProdDetail from "../../Helpers/GetProdDetail";
import React, {useEffect, useState} from "react";


export default function ItemDetail (){ 
    const [viaje, setviaje] = useState([0]); 

        useEffect(()=> {
            GetProdDetail().then((respuesta) => {
                setviaje (respuesta);
            });
 }, []);
    return (
<div className="card-arm">
        {
            viaje.map((data)=> (
                <Card 
                key={data.id}
                imgurl={data.imgurl}
                name={data.name} 
                salida={data.salida}
                price={data.price}
                />
            ) )
        }
        </div>
    )
    }