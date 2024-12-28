import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const basketContext = createContext();
export default function BasketProvider({ children }) {
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  const count = 0;
  async function handleAddBasket(id) {
    try {
      let res = await axios.get(`http://localhost:5000/books/${id}`);
      let data = res.data;
      let isExist = basket.find((book) => book.id == id);
      if (isExist) {
        isExist.count++;
        setBasket([...basket]);
      } else {
        setBasket([...basket, { ...data, count: 1 }]);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const value = {
    basket,
    setBasket,
    handleAddBasket,
  };
  return (
    <basketContext.Provider value={value}>{children}</basketContext.Provider>
  );
}
