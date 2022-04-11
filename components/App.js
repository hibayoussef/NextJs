import * as React from "react";
import Navbar from "./Navbar";
import Products from "./Products";
import { getAllProducts } from "../services/ECommerceServices";
//
const App = () => {
  const [products, setProducts] = React.useState([]); // defaults to empty array

  console.log("Hi in App file");
  //   const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts().then((response) => setProducts(response));
    // console.log("response: ", response);
  }, []); // empty deps array means it will only call once on mount

  return (
    <>
      <Navbar />
      <Products products={products} />
    </>
  );
};

export default App;
