import React, { useState } from 'react'
import Card from '../../components/Card/Card';
import classes from './Saved.module.css'


const Saved = () => {
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
            img: "../../img/card_img1.png",
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
        {
            img: "../../img/image2.png",
            price1: "44,50 ₽",
            price1_text: "С картой",
            price2: "50,50 ₽",
            price2_text: "Обычная",
            text_area: "Г/Ц Блинчики с мясом вес, Россия",
            button: "В корзину",
        },
    ];
    const [rangeval, setRangeval] = useState(null);
    const [rangeval2, setRangeval2] = useState(null);


    return (

        <div className={classes.Saved}>

            <div className="container">
                <div className="title_h2_big">
                    <div className={classes.Saved_title}>
                        <h2 className="h2_2_big">Избраное</h2>
                    </div>
                </div>

                <div className="row_sb">
                    <div className={classes.Saved_left}>
                        <div className={classes.Saved_filtr}>
                            <h4>Фильтр</h4>
                        </div>
                        <div className={classes.Saved_bottom}>
                            <h5>Цена</h5>
                            <button>Очистить</button>
                        </div>
                        <form>
                            <input type="text" value={rangeval} placeholder='0' />
                            <input type="text" value={rangeval2} placeholder='100' />
                        </form>

                        <div className={classes.multi_range}>
                            <input type="range" min={0} max={100} onChange={e => setRangeval(e.target.value)} className={classes.range1} />
                            <input type="range" min={101} max={1000} onChange={e => setRangeval2(e.target.value)} className={classes.range2} />
                        </div>
                        <div className={classes.saved_a}>
                            <a href="#!">Молоко</a>
                            <a href="#!">Сливки</a>
                            <a href="#!">Яйцо</a>
                        </div>
                        <div className={classes.saved_but}>
                            <button>Применить</button>
                        </div>
                    </div>
                    <div className={classes.Saved_right}>
                
                        <div className="row_sb">
                            {cards.map((card, index) => (
                                <Card card={card} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Saved