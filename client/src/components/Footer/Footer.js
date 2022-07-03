import React from 'react'
import classes from './Footer.module.css'
import  {IoIosCall} from 'react-icons/io'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <div className="container">
                <div className="row_sb">
                    <div className={classes.foot_left}>

                    <div className={classes.logo}>
                        <img src="../../img/footer.logo.png" alt="" />
                    </div>
                    <div className={classes.foot_nav}>
                        <ul>
                            <li>О компании</li>
                            <li>Контакты</li>
                            <li>Вакансии</li>
                            <li>Статьи</li>
                            <li>Политика обработки персональных данных</li>
                        </ul>
                    </div>
                    </div>

                    <div className={classes.foot_right}>
                    <div className={classes.foot_logos}>
                        <img src="../../img/insta.png" alt="png" />
                        <img src="../../img/vkontakte.png" alt="png" />
                        <img src="../../img/facebook.png" alt="png" />
                        <img src="../../img/ok.png" alt="png" />
                    </div>
                    <div className={classes.call}>
                        <IoIosCall/>
                        <h5>8 800 777 33 33</h5>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer