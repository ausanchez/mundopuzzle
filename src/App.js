import './App.css';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={'Bienvenido a la lista de productos de Mundo Puzzle'}/>
    </>
  );
}

export default App;
