import React, { useContext, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../context/cart-context";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  const [inputAmount, setInputAmount] = useState(1);

  const inputHandler = (e) => {
    setInputAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const item = { ...props.item, amount: +inputAmount };
    cartCtx.addItem(item);
    setInputAmount(1);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        label="Amount"
        input={{
          type: "number",
          id: "amount",
          min: "1",
          max: "5",
          step: "1",
          value: inputAmount,
          onChange: inputHandler,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
