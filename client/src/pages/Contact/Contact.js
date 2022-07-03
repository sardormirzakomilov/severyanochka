import React from 'react'
import classes from './Contact.module.css'
import { BiHomeAlt } from 'react-icons/bi'
import { BsTelephone } from 'react-icons/bs'
import { AiOutlineQuestion } from 'react-icons/ai'
import Iframe from 'react-iframe'
const Contact = () => {
    return (
        <div className={classes.Contact}>
            <div className="container">
                <div className="title_h2_36">
                    <h2 className='h2_2_big'>Контакты</h2>
                </div>
                <div className={classes.row}>
                    <div className="row_">
                        <div className={classes.cont_num_icon}>
                            <BiHomeAlt />
                        </div>
                        <div className={classes.cont_num_text}>
                            <h3> Бухгалтерия, склад</h3>
                            <a href='#!'>+7 82140 92619</a>
                        </div>
                    </div>
                    <div className="row_">
                        <div className={classes.cont_num_icon}>
                            <AiOutlineQuestion />
                        </div>
                        <div className={classes.cont_num_text}>
                            <h3>Вопросы по системе лояльности</h3>
                            <a href='#!'>+7 908 716 33 97</a>
                        </div>
                    </div>
                </div>
                <div className="title_h2_36">
                    <div className="h2_36_title">
                        <h2 className="h2_36">Наши магазины</h2>
                    </div>
                    <hr />
                </div>
                <div className={classes.row}>
                    <div className={classes.cont_location}>
                        <img src="../../img/market.png" alt="" />
                        <h3>ул. Дорожная 10</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (1).png" alt="" />
                        <h3>ул. Советская 87</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (2).png" alt="" />
                        <h3>ул. Заводская 16</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                    <div className={classes.cont_location}>
                        <img src="../../img/market (3).png" alt="" />
                        <h3>ул. Рабочая 1</h3>
                        <a href="#!"><BsTelephone /> +7 904 271 35 90</a>
                    </div>
                </div>

                <div className={classes.iframe}>
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24117.788271164856!2d69.5976237!3d40.92180735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1655381212684!5m2!1sru!2s" width="100%" height="354" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact