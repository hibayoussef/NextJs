import * as React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { getAllProducts } from "../services/ECommerceServices";
import { deleteProduct } from "../services/ECommerceServices";
//
const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts().then((response) => setProducts(response));
  }, []);

  console.log("products: ", products);

  function removeItem(index) {
    deleteProduct(index);
  }
  return (
    <>
      <Navbar />
      <Products products={products} removeItem={removeItem} />
    </>
  );
};

export default App;
