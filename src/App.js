import logo from '../src/logo.png';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <img src={logo} className="App-logo" alt="logo" />
       
        <p className='tit'> Proyecto Agencia de Viaje</p>
      </header>
    </div>
  );
}

export default App;
