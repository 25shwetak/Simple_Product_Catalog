import React from 'react';
import Greet from "./Greet";
import productList from "./productList";
import ProductList from "./components/ProductList";

function App() {
  console.log(productList)
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;

///< Greet name= "Shweta" surname="Kumari"/>
//{productList.map(product => <h5>{product.name}</h5>)}