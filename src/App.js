
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/card/ItemCount';


function App() {


  return (
    <div className="App"> 
      <header className="App-header">
        <NavBar/>
        
      </header>
      <ItemListContainer/>
      <div className='cont'>
      <ItemCount initial={1} stock={10}/>
      </div>
      
    </div>
  );
}

export default App;