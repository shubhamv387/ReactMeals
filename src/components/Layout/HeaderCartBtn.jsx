import React, { useContext } from "react";
import classes from "./HeaderCartBtn.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../context/cart-context";

const HeaderCartBtn = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce(
    (curNum, item) => curNum + item.amount,
    0
  );

  const cartBtnClickHandler = () => {
    props.onShowCart();
  };

  return (
    <button className={classes.button} onClick={cartBtnClickHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartBtn;
