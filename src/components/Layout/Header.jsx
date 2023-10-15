import React from "react";
import classes from "./Header.module.css";

import mealsImg from "../../assets/meals.jpg";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartBtn />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="delicious food" />
      </div>
    </>
  );
};

export default Header;
