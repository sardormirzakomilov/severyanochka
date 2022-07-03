import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import classes from "./Card.module.css";

const Card = ({ card }) => {


  return (
    <Link to={"/product"}>
      <div className={classes.Cardd__}>
        <div className={classes.Card}>
          <div className={classes.card_img}>
            <img src={card.img} alt={card.img} />
            <FaRegHeart/>
          </div>
          <div className={classes.prices}>
            <div className={classes.left_price}>
              <h5>{card.price1}</h5>
              <p>{card.price1_text}</p>
            </div>
            <div className={classes.right_price}>
              <h5>{card.price2}</h5>
              <p>{card.price2_text}</p>
            </div>
          </div>
          <div className={classes.text_area}>
            <h3>{card.text_area}</h3>
          </div>
          <div className={classes.Button}>
            <button>{card.button}</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
