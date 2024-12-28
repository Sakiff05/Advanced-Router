import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const favoriteContext = createContext();

export default function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );
  async function handleAddFavorites(id) {
    try {
      let res = await axios.get(`http://localhost:5000/books/${id}`);
      let isExist = favorites.find((book) => book.id == id);
      if (isExist) {
        let filteredFavorites = favorites.filter((book) => book.id != id);
        setFavorites(filteredFavorites);
      } else {
        setFavorites([...favorites, res.data]);
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = {
    favorites,
    setFavorites,
    handleAddFavorites,
  };
  return (
    <favoriteContext.Provider value={value}>
      {children}
    </favoriteContext.Provider>
  );
}
