import React from "react";
import classes from "./ShoppingCard.module.css";

const ShoppingCard = ({ product }) => {


  return (
    <div className={classes.ShoppingCard}>
      <img src={`../../img/${product.img}`} alt="" />
      <div className={classes.textss}>
        <h5 className={classes.sh_c_h5}>{product.text_area}</h5>
        <hr />
        <h6>{product.price1}</h6>
      </div>
      <div className={classes.totalNumber}>2 щт</div>
      <h3 className={classes.totalPrice}>89,00₽</h3>
    </div>
  );
};

export default ShoppingCard;
