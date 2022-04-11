import * as React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { getAllProducts } from "../services/ECommerceServices";
//
const App = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts().then((response) => setProducts(response));
  }, []);

  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default App;
