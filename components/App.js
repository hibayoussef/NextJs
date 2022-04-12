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

  function removeItem(index) {
    deleteProduct(index);
    const data = products.filter((i) => i.id !== index);
    // products.splice(index, 1);
    getAllProducts();
    setProducts(data);
  }

  console.log("productssss: ", products);
  return (
    <>
      <Navbar />
      <Products products={products} removeItem={removeItem} />
    </>
  );
};

export default App;
