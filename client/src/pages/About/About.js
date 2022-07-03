import React from 'react'
import classes from './About.module.css'


const About = () => {
    return (
        <div className={classes.About}>
            <div className="container">
                <div className="title_h2_big">
                    <div className={classes.About_title}>
                        <div className={classes.About_text}>
                            <h2 className="h2_2_big">О компании</h2>
                            <p>Мы непрерывно развиваемся и <br /> работаем над совершенствованием сервиса, заботимся о наших клиентах, <br /> стремимся к лучшему будущему.</p>
                        </div>
                        <div className={classes.About_img}>
                            <img src="../../img/mans_a.png" alt="" />
                        </div>

                    </div>
                </div>

                <div className="row_sb">
                    <div className={classes.About_text_bottom}>
                        <h3>Мы занимаемся розничной торговлей</h3>
                        <h4>Более 20 лет.</h4>
                    </div>
                    <div className={classes.About_text_bottom}>
                        <h3>Основная миссия компании</h3>
                        <h4>Максимальное качество товаров и услуг по доступной цене.</h4>
                    </div>
                    <div className={classes.About_text_bottom}>
                        <h3>Отличительная черта нашей сети</h3>
                        <h4>Здоровая и полезная продукция местного производства внаших магазинах.</h4>
                    </div>
                </div>
                <div className={classes.About_thenks__}>
                    <img src="../../img/logo_about.png" alt="" />
                    <div className={classes.About_thenks}>
                        Спасибо за то, что вы с нами. Северяночка, везет всегда!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About