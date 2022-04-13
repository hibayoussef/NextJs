import axios from "axios";

// [id]

export async function getAllProducts() {
  const res = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      console.log("Hi in get file");
      const products = res.data;
      console.log("products: ", products);
      return products;
    });

  return res;
}

// get element by ID
export async function getSingleProductRequest(context) {
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
// export const deleteProduct = async (id) => {
//   await axios
//     .delete(`https://fakestoreapi.com/products/${id}`)
//     .then((res) => {
//       console.log("data: ", res.data);
//       delete res.data;
//     })
//     .catch((err) => console.log("error: ", err));
// };

export const deleteProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  console.log("data for delete: ", data);

  return data;
};

// export const addProduct = async (
//   {title,
//   price,
//   description,
//   image,
//   category}
// ) => {
//   return await fetch("https://fakestoreapi.com/products", {
//     method: "POST",
//     body: JSON.stringify({
//       title: title,
//       price: price,
//       description: description,
//       image: image,
//       category: category,
//     }),
//     headers: {
//       "Content-type": "multipart/form-data",
//     },
//   })
//     .then((res) => res.json())
//     .then((json) => console.log(json));
// };
