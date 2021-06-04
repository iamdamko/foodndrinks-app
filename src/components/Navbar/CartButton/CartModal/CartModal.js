import ReactDOM from "react-dom";
import classes from "./CartModal.module.css";
import AddedCartItem from "./AddedCartItem";
import { useGlobalContext } from "../../../../items-context";

const CartModal = (props) => {
  const { cartItemList } = useGlobalContext();

  const cartList = cartItemList.map((cartListItem, index) => {
    return (
      <AddedCartItem
        name={cartListItem.name}
        price={cartListItem.price}
        id={cartListItem.id}
        index={index}
        key={cartListItem.id}
      />
    );
  });

  const totalAmount = cartItemList
    .map((cartListItem) => {
      return cartListItem.price;
    })
    .reduce((sum, cartListItem) => {
      return sum + cartListItem;
    }, 0);

  const modalContent = (
    <div className={classes["cart-modal"]}>
      <div>
        <h2>Articles:</h2>
        <ul>{cartList}</ul>
        <h3>Total amount: {totalAmount.toFixed(2)}€</h3>
        <div className={classes["button-modal"]}>
          <button>Buy</button>
          <button onClick={props.onClick}>Close</button>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("overlays")
  );
};

export default CartModal;
