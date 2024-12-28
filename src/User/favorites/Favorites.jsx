import { useContext } from "react";
import FavoriteItems from "../../components/UserComponents/favoriteItems/FavoriteItems";
import Header from "../../components/UserComponents/header/Header";
import { favoriteContext } from "../../context/FavoriteProvider";

function Favorites() {
  const { favorites } = useContext(favoriteContext);
  return (
    <div className="body">
      <Header>Favorites</Header>
      {favorites.length > 0 ? (
        <FavoriteItems />
      ) : (
        <h1 className="text-5xl text-center ">Your favorites is empty</h1>
      )}
    </div>
  );
}

export default Favorites;
