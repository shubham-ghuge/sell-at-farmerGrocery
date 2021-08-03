import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { dataReducer, initialState } from "../reducers/dataReducer";
import { useAuthContext } from "./useAuthContext";

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [walletBalence, setWalletBalence] = useState(0);
  const [state, dispatch] = useReducer(dataReducer, initialState);
  const { token } = useAuthContext();
  useEffect(() => {
    if (window.innerWidth < 600) {
      setToggleMenu(true);
    }
  }, []);
  async function getProductsData() {
    try {
      dispatch({ type: "LOADING" });
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/farmers/products"
      );
      if (data.success && data.response) {
        dispatch({
          type: "INITIALIZE_PRODUCTS",
          payload: data.response,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({ type: "LOADING" });
    }
  }
  async function getOrdersData() {
    try {
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/farmers/order"
      );
      if (data.success && data.orders) {
        dispatch({
          type: "INITIALIZE_ORDERS",
          payload: data.orders,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function getCategories() {
    try {
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/products/category"
      );
      if (data.success && data.response) {
        dispatch({ type: "INITIALIZE_CATEGORIES", payload: data.response });
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function deleteProduct(productId) {
    try {
      const { data } = await axios.delete(
        `https://farmers-grocery-v2.herokuapp.com/products/${productId}`
      );
      if (data.success) {
        console.log(data.product._id);
        return dispatch({ type: "DELETE_PRODUCT", payload: data.product._Id });
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (token) {
      getProductsData();
      getOrdersData();
      getCategories();
    }
  }, [token]);
  return (
    <DataContext.Provider
      value={{
        loading: state.loading,
        products: state.products,
        totalProducts: state.products.length,
        getProductsData,
        orders: state.orders,
        totalOrders: state.orders.length,
        categories: state.categories,
        deleteProduct,
        dispatch,
        toggleMenu,
        setToggleMenu,
        walletBalence,
        setWalletBalence,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
export const useDataContext = () => useContext(DataContext);
