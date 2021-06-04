import React, { useContext } from "react";
import classes from "./Items.module.css";
import SeperateItem from "./SeperateItem/SeperateItem";
import { useGlobalContext } from "../../../items-context";

const Items = (props) => {
  const { filteredData } = useGlobalContext();

  const itemsList = filteredData.map((item) => {
    return (
      <SeperateItem
        id={item.id}
        name={item.name}
        price={item.price}
        key={item.id}
      />
    );
  });

  return <ul className={classes.items}>{itemsList}</ul>;
};

export default Items;
