import React from "react";
import SitateCard from "../../../components/SitateCard/SitateCard";
import classes from "./Sitate.module.css";
import { BsChevronRight } from 'react-icons/bs'

const Sitate = () => {
  const sitateCard = [
    {
      img: "stateCard.png",
      p1: "05.03.2021",
      h4: "Режим использования масок и перчаток на территории магазинов",
      p2: 'Подробная информация о режимах использования масок и перчаток на территории магазинов "ЛЕНТА". Информация обновляется каждый будний день.',
      button: 'Подробнее'
    },
    {
      img: "stateCard.png",
      p1: "05.03.2021",
      h4: "Весеннее настроение для каждой",
      p2: '8 Марта – это не просто Международный женский день, это ещё день тюльпанов, приятных сюрпризов и праздничных тёплых пожеланий.',
      button: 'Подробнее'
    },
    {
      img: "stateCard.png",
      p1: "05.03.2021",
      h4: "ЗОЖ или ФАСТФУД. А вы на чьей стороне? Голосуем!",
      p2: 'Голосуйте за любимые категории, выбирайте категорию-победителя в мобильном приложении и получайте кешбэк 10% баллами в апреле!',
      button: 'Подробнее'
    },
  ];

  return (
    <div className={classes.Sitate}>
      <div className="container ">     
        <div className=" row_sb   title_h2_36">
            <h2 className="h2_36  h2_h_head_1">Статьи</h2>
            <div className='h2_36_right'>
            <h6>Все статьи</h6>
            <BsChevronRight />
          </div>
        </div>
        <div className="row_sb ">
          {sitateCard.map((sitateCard, index) => (
            <SitateCard sitateCard={sitateCard} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sitate;
