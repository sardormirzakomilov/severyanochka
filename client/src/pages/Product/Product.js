import React from "react";
import Aktsii from "../HomePage/Aktsii/Aktsii";
import classes from "./Product.module.css";
const Product = () => {
  const cards = {
    img: "card_img1.png",
    price1: "44,50 ₽",
    price1_text: "С картой",
    price2: "50,50 ₽",
    price2_text: "Обычная",
    text_area: "Г/Ц Блинчики с мясом вес, Россия",
  };

  return (
    <>
      <div className={classes.Products}>
        <div className="container">
          {/* <div className="title_h2_36">
            <h2 className="h2_36 ">Масло ПРОСТОКВАШИНО сливочное в/с 82% фольга без змж, Россия, 180 г</h2>
        </div> */}
          <div className={classes.Products_top}>
            <div className="row_sb">
              <div className={classes.left_img}>
                <img src={`../../img/${cards.img}`} alt="" />
                <div className={classes.skidka}>
                  <span>50%</span>
                </div>
              </div>
              <div className={classes.right_img}>
                <div className={classes.prices}>
                  <h4 className={classes.price1}>{cards.price1}</h4>
                  <h4 className={classes.price2}>{cards.price2}</h4>
                </div>
                <button>В корзину</button>
                <div className={classes.all_text}>
                  <p>{cards.text_area}</p>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className={classes.aktsii}>
        <Aktsii />
      </div>
    </>
  );
};

export default Product;
