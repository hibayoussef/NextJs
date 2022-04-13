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

  console.log("productssss: ", products);

  function removeItem(index) {
    deleteProduct(index)
      .then((res) => {
        let p = products.filter((rec, i) => index != rec.id);
        setProducts(p);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  // function addItem(title, price, description, image, category) {
  //   const product = addProduct(title, price, description, image, category);

  //   const productData = [...products, product];
  //   getAllProducts();
  //   setProducts(productData);
  // }

  return (
    <>
      <Navbar />
      <Products products={products} removeItem={removeItem} />
    </>
  );
};

export default App;
