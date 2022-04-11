import axios from "axios";

// [id]

// get All Products
// export async function getAllProducts() {
//   const res = await axios.get("https://fakestoreapi.com/products");
//   const products = await res.data;
//   console.log("products: ", products);
//   return products;
// }

export async function getAllProducts() {
  const res = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      const products = res.data;
      console.log("products: ", products);
      return products;
    });

  return res;
}

// get element by ID
export async function getSingleProductRequest(context) {
  //   const id = context.params.id;
  //   const req = await axios.get("https://fakestoreapi.com/products/" + id);
  //   const product = await req.json();
  //   console.log("product: ", product);
  //   return product;
  const id = context.params.id;
  const req = await fetch("https://fakestoreapi.com/products/" + id);
  const product = await req.json();
  return {
    props: {
      product,
    },
  };
}

// get product by ID
export async function getProductsOneByOne() {
  const req = await fetch("https://fakestoreapi.com/products");
  const products = await req.json();
  const paths = products.map((product) => {
    return {
      params: {
        id: product.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

// delete product
export const deleteProduct = async (id) => {
  await axios
    .delete(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      //   res.json();
      console.log("data: ", res.data);
      delete res.data;
    })
    .catch((err) => console.log("error: ", err));
};
