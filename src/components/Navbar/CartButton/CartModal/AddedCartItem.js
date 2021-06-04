import React from "react";
import classes from "./AddedCartItem.module.css";
import { useGlobalContext } from "../../../../items-context";

const AddedCartItem = (props) => {
  const { removeItemFromCartHandler } = useGlobalContext();

  return (
    <li className={classes["added-item"]}>
      <h3>{props.name}</h3>
      <h3>Price: {props.price.toFixed(2)}€</h3>
      <button onClick={() => removeItemFromCartHandler(props.index)}>
        Remove
      </button>
    </li>
  );
};

export default AddedCartItem;
