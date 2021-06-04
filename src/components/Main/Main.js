import React from "react";
import FilterComponent from "./FilterComponent/FilterComponent";
import Items from "./Items/Items";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <div className={classes.main}>
      <FilterComponent />
      <Items />
    </div>
  );
};

export default Main;
