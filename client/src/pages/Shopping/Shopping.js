import React from 'react'
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard'
import classes from './Shopping.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Shopping = () => {
    const products = [
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
          text_area: "Г/Ц Блинчики с мясом вес, Россия ",
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

      const bonusHand = ()=>toast.error('this system has not yet been set up')

    return (
        <div className={classes.Shopping}>
            <div className="container">
                <div className="title_h2_big">
                    <div className={classes.aktsii_title}>
                        <h2 className="h2_2_big  h2_h_head_1">Корзина</h2>
                    </div>
                </div>
                <div className="row_sb">
                    <div className={classes.left_shop}>
                        {products.map((product , index)=>(
                            <ShoppingCard product={product} key={index}/>
                        ))}
                    </div>
                    <div className={classes.right_shop}>
                        <h6 className={classes.bonus} onClick={bonusHand}>Вы получяете 100 бонусов <ToastContainer /></h6>
                        <hr />
                        <div className={classes.allPrice}>
                            <h5>3 товара</h5>
                            <h2>250,09 ₽ </h2>
                        </div>
                        <hr />
                        <h3 className={classes.minPrice}>
                        Минимальная сумма заказа 1000₽
                        </h3>
                        <Link to={'/delivery'}>
                        <button className={classes.button}>Оформить заказ</button>
                            </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopping