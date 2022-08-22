
import "../card/Card.css";
import Button from "../Button/Button";
export default function CardDetail ({imgurl, name, salida, price}) {
    

    return(
<div className="main">
    <div className="card">
        <div>
            <img src={imgurl} alt="imagen"/>
        </div>
        <div className="card-detail">
            <h2>{name}</h2>
            <p>{salida}</p>
            <h3>$ {price}</h3>
            <Button text="Reservar"/>
        </div>    
    </div>
</div>
    )
}