import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../context/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id}>
          {item.name} {item.price}
        </li>
      ))}
    </ul>
  );

  const closeCartModel = () => {
    props.onHideCart();
  };

  return (
    <Model onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCartModel} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
};

export default Cart;
