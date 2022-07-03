import React from "react";
import classes from "./SitateCard.module.css";

const SitateCard = ({ sitateCard }) => {
  return (
    <div className={classes.SitateCard}>
      <img src={`../../../img/${sitateCard.img}`} alt={sitateCard.img} />
      <div className={classes.Sitate_text}>
      <p className={classes.data}>{sitateCard.p1}</p>
      <h4>{sitateCard.h4}</h4>
      <p className={classes.data2}>{sitateCard.p2}</p>
  
      <button>{sitateCard.button}</button>
  
      </div>
    </div>
  );
};

export default SitateCard;
