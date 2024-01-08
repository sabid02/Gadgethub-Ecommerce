import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import Products from "./Components/Pages/Products/Products";
import Services from "./Components/Pages/Services";
import ProductsCards from "./Components/Pages/Products/ProductsCards";
import data from "./Components/Pages/Products/ProductsData";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/products-items/:category">
            <ProductsCards allProducts={data} />
          </Route>
          <Route path="/products-items">
            <ProductsCards allProducts={data} />
          </Route>
          <Route path="/services" component={Services} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
