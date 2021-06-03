import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import ProductContainer from './components/ProductContainer';

function App() {
  return (
    <div className="App">
      <Cart/>
      <ProductContainer/>
    </div>
  );
}

export default App;
