import React from "react";
import classes from "./CartButton.module.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useGlobalContext } from "../../../items-context";

const CartButton = (props) => {
  const { totalCartQuantity } = useGlobalContext();

  return (
    <button onClick={props.onClick} className={classes.cartButton}>
      <span className={classes.cartSpan}>
        <ShoppingCartIcon />
        <h4>{totalCartQuantity}</h4>
      </span>

      <span>
        <h4>articles</h4>
      </span>
    </button>
  );
};

export default CartButton;
