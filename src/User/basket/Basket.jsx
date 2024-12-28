import { useContext } from "react";
import BasketItems from "../../components/UserComponents/basketItems/BasketItems";
import Header from "../../components/UserComponents/header/Header";
import { basketContext } from "../../context/BasketProvider";

function Basket() {
  const { basket } = useContext(basketContext);
  return (
    <div className="body">
      <Header>Basket</Header>
      {basket.length == 0 ? (
        <h1 className="text-5xl text-center ">Your basket is empty</h1>
      ) : (
        <BasketItems />
      )}
    </div>
  );
}

export default Basket;
