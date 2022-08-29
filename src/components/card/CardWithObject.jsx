import Button from "../Button/Button";
import "./card.css";

function Card(props) {
  console.log(props.data);

  return (
    <div className="card">
      <div className="card-img">
        <img src={props.data.img} alt="imagen" />
      </div>
      <div className="card-detail">
        <h2>{props.data.title}</h2>
        <p>{props.data.descripcion}</p>
        <h3>{props.data.moneda} {props.data.price}</h3>
        <Button text="Ver más" />
      </div>
    </div>
  );
}

export default Card;
