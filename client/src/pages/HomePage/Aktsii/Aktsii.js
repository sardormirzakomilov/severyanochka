import React from "react";
import classes from "./Aktsii.module.css";
import { BsChevronRight } from "react-icons/bs";
import Card from "../../../components/Card/Card";

const Aktsii = () => {
  const cards = [
    {
      img: "../../img/card_img1.png",
      price1: "44,50 ₽",
      price1_text: "С картой",
      price2: "50,50 ₽",
      price2_text: "Обычная",
      text_area: "Г/Ц Блинчики с мясом вес, Россия",
      button: "В корзину",
    },
    {
      img: "../../img/image4.png",
      price1: "44,50 ₽",
      price1_text: "С картой",
      price2: "50,50 ₽",
      price2_text: "Обычная",
      text_area: "Г/Ц Блинчики с мясом вес, Россия",
      button: "В корзину",
    },
    {
      img: "../../img/image2.png",
      price1: "44,50 ₽",
      price1_text: "С картой",
      price2: "50,50 ₽",
      price2_text: "Обычная",
      text_area: "Г/Ц Блинчики с мясом вес, Россия",
      button: "В корзину",
    },
    {
      img: "../../img/image3.png",
      price1: "44,50 ₽",
      price1_text: "С картой",
      price2: "50,50 ₽",
      price2_text: "Обычная",
      text_area: "Г/Ц Блинчики с мясом вес, Россия",
      button: "В корзину",
    },
  ];

  return (
    <div className={classes.Aktsii}>
      <div className="container">
        <div className="row_sb title_h2_36">
          <div className={classes.aktsii_title}>
            <h2 className="h2_36  h2_h_head_1">Акции</h2>
          </div>
          <div className="h2_36_right">
            <h6>Все акции</h6>
            <BsChevronRight />
          </div>
        </div>
        <div className='Card_div'>
          {cards.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aktsii;
