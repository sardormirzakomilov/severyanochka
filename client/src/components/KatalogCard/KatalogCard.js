import React from "react";

import classes from "./KatalogCard.module.css";
const KatalogCard = ({ card }) => {
  return (
    
      <div className={classes.KatalogCard}>
        <img src={`../../img/${card.img}`} alt="" />
        <div className={classes.border_div}>
          <h3>{card.info}</h3>
        </div>
      </div>
 
  );
};

export default KatalogCard;
