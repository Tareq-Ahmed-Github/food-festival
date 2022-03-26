import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Carts from './components/Carts/Carts';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Products></Products>
        <Carts></Carts>
      </div>
    </div>
  );
}

export default App;
