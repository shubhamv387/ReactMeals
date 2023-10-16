import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Model from "../UI/Model";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const addItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={addItemHandler.bind(null, item)}
          onRemove={removeItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const closeCartModel = () => {
    props.onHideCart();
  };

  const orderBtnHandler = () => {
    cartCtx.order();
    alert("Your order has been placed. Enjoy!");
    props.onHideCart();
  };

  return (
    <Model onHideCart={props.onHideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={closeCartModel} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && (
          <button onClick={orderBtnHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Model>
  );
};

export default Cart;
