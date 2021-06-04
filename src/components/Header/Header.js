import React from "react";
import classes from "./Header.module.css";
import HeaderImage from "../../assets/shoppingImage.png";

const Header = () => {
  return (
    <div className={classes.header}>
      <img src={HeaderImage} alt="Buying food" />
      <h1 className={classes.headerText}>
        Hungry? <br></br>Order delicious food online
      </h1>
    </div>
  );
};

export default Header;
