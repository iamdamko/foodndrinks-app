import React from "react";
import CartButton from "./CartButton/CartButton";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={classes.navbar}>
      <h1 className={classes.logo}>Food'n'DrinksApp</h1>
      <CartButton onClick={props.onClick} />
    </div>
  );
};

export default Navbar;
