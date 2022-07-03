import classes from "./Delivery.module.css";

const Delivery = () => {
  return (
    <div className={classes.Delivery}>
      <div className="container">
        <div className="title_h2_big">
          <div className={classes.aktsii_title}>
            <h2 className="h2_2_big  h2_h_head_1">Доставка</h2>
          </div>
        </div>
        <div className={classes.row_del}>
          <div className={classes.delivery_left}>
            <form>
              <div className={classes.input_label}>
                <label htmlFor="where" className="h2_36">
                  Куда
                </label>
                <textarea rows="10" type="text" id="where" />
              </div>
              <div className={classes.input_label}>
                <label htmlFor="when" className="h2_36">
                  Когда
                </label>
                <input
                  type="text"
                  id="when"
                  placeholder={new Date().toLocaleString()}
                />
              </div>
              <div className={classes.input_label}>
                <label htmlFor="number" className="h2_36">
                  Номер
                </label>
                <input type="text" id="number" placeholder="91 234 56 78" />
              </div>
              <button>Оплатить</button>
            </form>
          </div>

          <div className={classes.delivery_right}>
            <div className={classes.right_shop}>
              <hr />
              <div className={classes.allPrice}>
                <h5>3 товара</h5>
                <h2>250,09 ₽ </h2>
              </div>
              <hr />
              <h3 className={classes.minPrice}>
                Минимальная сумма заказа 1000р
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
