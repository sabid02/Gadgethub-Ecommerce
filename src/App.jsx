import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import Products from "./Components/Pages/Products/Products";
import Services from "./Components/Pages/Services";
import ProductsCards from "./Components/Pages/Products/ProductsCards";
import SignIn from "./Components/Pages/SignIn";
import ProductItem from "./Components/Pages/Products/ProductItem";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { UserContextProvider } from "../context/userContext";
import FilterProduct from "./Components/FilterProducts";
import { useState, useEffect } from "react";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

import { Routes, Route } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:7000/products")
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  console.log(products);

  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products-items/:path"
          element={<ProductsCards allProducts={products} />}
        />
        <Route
          path="/products-items"
          element={<ProductsCards allProducts={products} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/filter-product" element={<FilterProduct />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
