import React, { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddProduct = () => {
    if (inputValue.trim() !== "") {
      const newProduct = {
        id: new Date().getTime(),
        name: inputValue,
      };
      setProducts([...products, newProduct]);
      setInputValue("");
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const handleUpdateProduct = (id) => {
    const updatedName = prompt(
      "Enter updated product name:",
      selectedProduct.name
    );
    if (updatedName !== null) {
      const updatedProducts = products.map((product) =>
        product.id === id ? { ...product, name: updatedName } : product
      );
      setProducts(updatedProducts);
    }
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setInputValue(product.name);
  };

  return (
    <div className="App">
      <h1>Admin Dashboard</h1>
      <div className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter product name"
        />
        <button
          onClick={
            selectedProduct
              ? () => handleUpdateProduct(selectedProduct.id)
              : handleAddProduct
          }
        >
          {selectedProduct ? "Update" : "Create"}
        </button>
      </div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}
            <button onClick={() => handleEditProduct(product)}>Edit</button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
