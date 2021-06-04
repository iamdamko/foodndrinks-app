import React from "react";
import classes from "./FilterComponent.module.css";
import { useGlobalContext } from "../../../items-context";

const FilterComponent = (props) => {
  const { itemFilterHandler } = useGlobalContext();

  return (
    <aside className={classes.filterWrapper}>
      <button onClick={() => itemFilterHandler("All")}>All</button>
      <button onClick={() => itemFilterHandler("Food")}>Food</button>
      <button onClick={() => itemFilterHandler("Cold Drinks")}>
        Cold Drinks
      </button>
      <button onClick={() => itemFilterHandler("Hot Drinks")}>
        Hot Drinks
      </button>
    </aside>
  );
};

export default FilterComponent;
