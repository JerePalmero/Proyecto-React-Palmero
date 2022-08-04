
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/card/ItemListContainer';
import ItemCount from './components/card/ItemCount';


function App() {
const data={
  titulo: "Nuestros Viajes"
};

  return (
    <div className="App"> 
      <header className="App-header">
        <NavBar/>
        <ItemListContainer data={data}/>
      </header>
      <main className='main'>
        <ItemCount initial={1} stock={10}/>
      </main>
    </div>
  );
}

export default App;