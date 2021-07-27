import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDataContext } from "../../../contexts/useDataContext";
import { Alert } from "../../Alert";
import { Loader } from "../../Icons";

function AddProduct() {
  const { productId } = useParams();
  const { categories, products } = useDataContext();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    categoryId: "",
    price: 0,
    discount: 0,
    imgUrl: "",
  });
  useEffect(() => {
    if (productId !== undefined) {
      const [{ name, description, categoryId, price, discount, imgUrl }] =
        products.filter((i) => i._id === productId);
      setProduct((curr) => ({
        ...curr,
        name,
        description,
        categoryId,
        price,
        discount,
        imgUrl,
      }));
    }
  }, []);
  async function addProductsOnServer(event) {
    event.preventDefault();
    try {
      const url = productId
        ? `https://farmers-grocery-v2.herokuapp.com/products/${productId}`
        : "https://farmers-grocery-v2.herokuapp.com/products/";
      setLoading(true);
      const { data } = await axios.post(url, {
        name: product.name,
        description: product.description,
        categoryId: product.categoryId,
        price: product.price,
        discount: product.discount,
        imgUrl: product.imgUrl,
      });
      if (data.success) {
        setMessage(data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="px-5">
      {message && (
        <Alert
          message={message}
          onClose={() => setMessage(null)}
          color="success"
        />
      )}
      <form
        className="flex-column w-sm-40 form form-margin"
        onSubmit={(e) => addProductsOnServer(e)}
      >
        <h2 className="text-center fsz-3 mb-4">
          {productId ? "Edit " : "Add "}Product
        </h2>
        <label>product name</label>
        <input
          type="text"
          className="input"
          value={product.name}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, name: e.target.value }))
          }
          placeholder="enterproduct name"
          required
        />
        <label>product description</label>
        <textarea
          className="input"
          style={{height:"100px"}}
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
        ></textarea>
        <label>product category</label>
        <select
          name="category"
          value={product.categoryId}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, categoryId: e.target.value }))
          }
          required
        >
          <option value="">--Please choose an category--</option>
          {categories &&
            categories.map((i) => (
              <option value={i._id} key={i._id}>
                {i.name}
              </option>
            ))}
        </select>
        <label>product price</label>
        <input
          className="input"
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
          className="input"
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
          className="input mb-4"
          type="url"
          placeholder="Enter Valid image URL"
          value={product.imgUrl}
          onChange={(e) =>
            setProduct((curr) => ({ ...curr, imgUrl: e.target.value }))
          }
          required
        />
        <button className="btn-primary d-flex ai-center jc-center">
          {loading
            ? productId
              ? "updating"
              : "adding"
            : `${productId ? "Update" : "Add"} product`}
          {loading && <Loader />}
        </button>
      </form>
    </div>
  );
}
export { AddProduct };
