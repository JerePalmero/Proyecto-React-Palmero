import './Item.css';
import { Link } from 'react-router-dom';



const Item = ({ id, title, img, category,  moneda, price}) => {
  

  
    return (
        
        
        <div className="CardItem">
            <h1>{title}</h1>
          <div className="card-img">
        <img src={img} alt="imagen" className='ItemImg' />
      </div>
      <div className="card-detail">
        
        
        <p>{category}</p>
        <h3>{moneda}$ {price}</h3>     
            
               <button className='ButtonDetai'><Link className='ButtonDetai' to={`/detail/${id}`}>Ver detalle</Link></button>
            
            </div>
        </div>
    )
}

export default Item