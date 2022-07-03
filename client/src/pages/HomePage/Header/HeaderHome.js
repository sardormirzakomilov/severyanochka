import React from 'react'
import classes from './HeaderHome.module.css'

const HeaderHome = () => {
  return (
    <div className={classes.HeaderHome}>
      <div className="container">
        <div className="row">
          <div className={classes.head_img}>
            <img src="../../../img/head-img.png" alt="" />
          </div>
          <div className={classes.head_title}>
            <h1>Доставка бесплатно от 1000 ₽</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderHome