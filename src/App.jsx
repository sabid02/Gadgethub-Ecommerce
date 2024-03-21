import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import SignUp from "./Components/Pages/SignUp";
import Products from "./Components/Pages/Products/Products";
import Services from "./Components/Pages/Services";
import ProductsCards from "./Components/Pages/Products/ProductsCards";
import data from "./Components/Pages/Products/ProductsData";
import SignIn from "./Components/Pages/SignIn";
import axios from "axios";
import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

import { Routes, Route } from "react-router-dom";

// Previous imports and configurations remain the same

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route
          path="/products-items/:category"
          element={<ProductsCards allProducts={data} />}
        />
        <Route
          path="/products-items"
          element={<ProductsCards allProducts={data} />}
        />
        <Route path="/services" element={<Services />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
