import React from 'react'
import classes from './Predloj.module.css'

const Predloj = () => {
    const cls = [
        classes.item,
    ]

    const cards = [
        { title: "Оформите карту «Северяночка»", text: "И получайте бонусы при покупке в магазинах и на сайте", img: "../../../img/Карта лояльности-10 1.png" },
        { title: "Покупайте акционные товары", text: "И получайте вдвое больше бонусов", img: "../../../img/73 1.png" },
    ]

    return (
        <div>
            <div className="container">
                <div className="title_h2_36">
                    <div className='h2_36_title'>
                        <h2 className="h2_36">Покупали раньше</h2>
                    </div>
                </div>
                <div className="row_sb">
                    {cards.map((item, index) => (
                        <div className={`${cls.join(' ')} ${index}`} key={index}>
                            <div className={classes.item_left}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                            <img src={item.img} alt={item.img} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Predloj