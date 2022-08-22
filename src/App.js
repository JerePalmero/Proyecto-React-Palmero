
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/card/ItemCount';
import ItemDetailContainer from "../src/components/ItemDietail/ItemDetailContainer"
import dataProduct from './components/ItemList/Items';

function App() {


  return (
    <div className="App"> 
      <header className="App-header">
        <NavBar/>
        <div><h1>NUESTROS VIAJES</h1> </div>
        
      </header>

    <ItemListContainer/>
    <ItemDetailContainer/>
    

      
     
      


      <div className='cont'>
      <ItemCount initial={1} stock={10}/>
      </div>
      
    </div>
  );
}

export default App;