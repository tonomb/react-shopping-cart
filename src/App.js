import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

//context
import {ProductContext} from './contexts/ProductContext'
import {CartContext} from './contexts/CartContext'
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, item]);
  };

  const removeItem =(item) =>{
	  const newCart = cart.filter(i => i.id !== item.id)
	  setCart(newCart)

  }

  return (
    <div className="App">
      <ProductContext.Provider value={{products, addItem}}>
		  <CartContext.Provider value={{cart, removeItem}}>
		  <Navigation />
			{/* Routes */}
			<Route exact path="/">
			<Products />
			</Route>

			<Route path="/cart">
			<ShoppingCart />
			</Route>
		  </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
