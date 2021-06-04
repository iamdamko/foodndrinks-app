import React from "react";
import classes from "./SeperateItem.module.css";
import { useGlobalContext } from "../../../../items-context";

const SeperateItem = (props) => {
  const { addItemToCartHandler } = useGlobalContext();

  const item = {
    name: props.name,
    price: props.price,
    id: props.id,
  };

  return (
    <li className={classes["seperate-item"]}>
      <h3>{props.name}</h3>
      <p>Price: {props.price.toFixed(2)}€</p>

      <button onClick={() => addItemToCartHandler(item)}>Add</button>
    </li>
  );
};

export default SeperateItem;
