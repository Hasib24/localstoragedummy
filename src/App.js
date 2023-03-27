import { useEffect, useState } from 'react';
import './App.css';
import Products from './components/Products';


function App() {
  let [products, setProducts] = useState([]);
  useEffect( ()=>{
    fetch('data.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])

  return (
    <div className="App">
      <Products products={products}></Products>
    </div>
  );
}

export default App;
