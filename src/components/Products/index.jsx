import axios from "axios";
import React, { useEffect, useState } from "react";

function Product() {
  const [categories, setCategories] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    categoryId: "",
    price: 0,
    discount: 0,
    imgUrl: "",
  });
  useEffect(() => {
    async function getCategories() {
      try {
        const { data } = await axios.get(
          "https://farmers-grocery-v2.herokuapp.com/products/category"
        );
        if (data.success) {
          setCategories(data.response);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCategories();
  }, []);
  console.log(product);
  async function addProductsOnServer(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://farmers-grocery-v2.herokuapp.com/products/",
        {
          name: product.name,
          description: product.description,
          categoryId: product.categoryId,
          price: product.price,
          discount: product.discount,
          imgUrl: product.imgUrl,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form
        className="flex-column ai-center h-70 jc-center"
        onSubmit={(e) => addProductsOnServer(e)}
      >
        <input
          className="mb-4"
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, name: e.target.value }))
          }
          placeholder="product name"
        />
        <input
          className="mb-4"
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct((curr) => ({
              ...curr,
              description: e.target.value,
            }))
          }
          placeholder="product description"
        />
        <select
          className="mb-4"
          name="category"
          value={product.categoryId}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, categoryId: e.target.value }))
          }
        >
          <option value="">--Please choose an option--</option>
          {categories &&
            categories.map((i) => (
              <option value={i._id} key={i._id}>
                {i.name}
              </option>
            ))}
        </select>
        <input
          className="mb-4"
          type="text"
          value={product.price}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, price: e.target.value }))
          }
          placeholder="product price"
        />
        <input
          className="mb-4"
          type="text"
          value={product.discount}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, discount: e.target.value }))
          }
          placeholder="product discount"
        />
        <input
          className="mb-4"
          type="file"
          value={product.imgUrl}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, imgUrl: e.target.value }))
          }
          placeholder="product image url"
        />
        <button className="btn-success">Add product</button>
      </form>
    </>
  );
}
export { Product };
