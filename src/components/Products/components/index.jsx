import axios from "axios";
import React, { useState } from "react";
import { useDataContext } from "../../../contexts/useDataContext";

function AddProduct() {
  const { categories } = useDataContext();
  console.log(categories);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    categoryId: "",
    price: 0,
    discount: 0,
    imgUrl: "",
  });

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
    <div className="px-5">
      <form
        className="flex-column w-sm-40 form form-margin"
        onSubmit={(e) => addProductsOnServer(e)}
      >
        <h2 className="text-center fsz-3 mb-4">Add Product</h2>
        <label>product name</label>
        <input
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, name: e.target.value }))
          }
          placeholder="banana"
          required
        />
        <label>product description</label>
        <input
          type="text"
          value={product.description}
          onChange={(e) =>
            setProduct((curr) => ({
              ...curr,
              description: e.target.value,
            }))
          }
          placeholder="product description"
          required
        />
        <label>product category</label>
        <select
          name="category"
          value={product.categoryId}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, categoryId: e.target.value }))
          }
          required
        >
          <option value="">--Please choose an option--</option>
          {categories &&
            categories.map((i) => (
              <option value={i._id} key={i._id}>
                {i.name}
              </option>
            ))}
        </select>
        <label>product price</label>
        <input
          type="text"
          value={product.price}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, price: e.target.value }))
          }
          placeholder="product price"
          required
        />
        <label>product discount</label>
        <input
          type="text"
          value={product.discount}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, discount: e.target.value }))
          }
          placeholder="product discount"
          required
        />
        <label>product image</label>
        <input
          className="mb-4"
          type="file"
          value={product.imgUrl}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, imgUrl: e.target.value }))
          }
          required
        />
        <button className="btn-primary">Add product</button>
      </form>
    </div>
  );
}
export { AddProduct };
