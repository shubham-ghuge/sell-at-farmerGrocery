import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { dataReducer, initialState } from "../reducers/dataReducer";

const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(dataReducer, initialState);
  async function getProductsData() {
    try {
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
    }
  }
  async function getOrdersData() {
    try {
      const { data } = await axios.get(
        "https://farmers-grocery-v2.herokuapp.com/farmers/order"
      );
      if (data.success && data.response) {
        dispatch({
          type: "INITIALIZE_ORDERS",
          payload: data.response,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    state.products.length === 0 && getProductsData();
    state.orders.length === 0 && getOrdersData();
  }, []);
  console.log(state);
  return (
    <DataContext.Provider value={{ products: state.products, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
export const useDataContext = () => useContext(DataContext);
