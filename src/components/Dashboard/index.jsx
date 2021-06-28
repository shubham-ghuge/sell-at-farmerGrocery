import axios from "axios";
import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(
          "https://farmers-grocery-v2.herokuapp.com/orders"
        );
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
    getData();
  }, []);
  return (
    <>
      <h1>This is Dashboard</h1>
    </>
  );
}
export { Dashboard };
