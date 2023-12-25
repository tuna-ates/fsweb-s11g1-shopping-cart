import React, { useContext, useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";
import { CartContext } from "./contexts/CartContext";

function App() {
  const [products, setProducts] = useState(data);
  //const [cart, setCart] = useState([]);
 
  // const addItem = (item) => {
  //   // verilen itemi sepete ekleyin
  //  setCart([...cart,item]);
  // };

  return (
    <div className="App">
      {/* <Navigation cart={cart} /> */}
      <Navigation/>

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          {/* <Products products={products} addItem={addItem} /> */}
          <Products/>
        </Route>

        <Route path="/cart">
          {/* <ShoppingCart cart={cart} /> */}
          <ShoppingCart/>
        </Route>
      </main>
    </div>
  );
}

export default App;
