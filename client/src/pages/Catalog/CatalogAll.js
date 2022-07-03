import React from "react";
import KatalogCard from "../../components/KatalogCard/KatalogCard";
import classes from "./CatalogAll.module.css";

const Catalog = () => {
  const card_ =[
    {img:'img.png' , info: 'Молоко, сыр, яйцо'},
    {img:'img.png' , info: 'Хлеб'},
    {img:'img.png' , info: 'Фрукты и овощи'},
    {img:'img.png' , info: 'Замороженные продукты'},
    {img:'img.png' , info: 'Напитки'},
    {img:'img.png' , info: 'Кондитерские изделия'},
    {img:'img.png' , info: 'Чай, кофе'},
    {img:'img.png' , info: 'Бакалея'},
    {img:'img.png' , info: 'Здоровое питание'},
    {img:'img.png' , info: 'Зоотовары'},
    {img:'img.png' , info: 'Детское питание'},
    {img:'img.png' , info: 'Мясо, птица, колбаса'},
  ]
  return (
    <div className={classes.Catalog}>
      <div className="container">
        <div className="row_sb title_h2_big">
          <div className={classes.catalog_title}>
            <h2 className="h2_2_big">Каталог</h2>
          </div>
         
          <div className={classes.cards}>
            {card_.map((card , index)=>(
              <KatalogCard card={card} key={index}/>
              ))}
          </div>
              
        </div>
      </div>
    </div>
  );
};

export default Catalog;
