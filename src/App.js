import React from 'react';
import { HashRouter as BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import ProductDetais from './pages/ProductDetais';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <h1 className="title">No Master Store Shopping</h1>
      <BrowserRouter>
        <Switch>
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetais { ...props } /> }
          />
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ LandingPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
