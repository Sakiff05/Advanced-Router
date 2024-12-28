import React, { useContext } from "react";
import { favoriteContext } from "../../../context/FavoriteProvider";
import BookCard from "../card/BookCard";
import FavoriteCard from "../favoriteCard/FavoriteCard";

export default function FavoriteItems() {
  const { favorites } = useContext(favoriteContext);
  return (
    <div className="custom-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center ">
      {favorites.map((book) => (
        <FavoriteCard
          title={book.title}
          img={book.image}
          key={book.id}
          id={book.id}
        />
      ))}
    </div>
  );
}
