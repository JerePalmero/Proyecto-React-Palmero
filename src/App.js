
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/card/ItemListContainer';


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
    </div>
  );
}

export default App;