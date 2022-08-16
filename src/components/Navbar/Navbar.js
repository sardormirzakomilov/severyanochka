import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { FaBars, FaRegHeart } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";
import { MdOutlineLogin } from "react-icons/md";
// import { BsChevronDown } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Card from "../Card/Card";

const Navbar = () => {
  const [menu, setMenu] = useState({
    isMenu: false,
    register: false,
    login: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  const cards = [
    {
      img: "../../img/card_img1.png",
      price1: "44,50 ₽",
      price1_text: "С картой",
      price2: "50,50 ₽",
      price2_text: "Обычная",
      text_area: "Sardor",
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
  ];
  const navbarArray = [
    { to: "/", text: "Home" },
    { to: "/catalog", text: "Каталог" },
    { to: "/about", text: "О компании" },
    { to: "/contact", text: "Contact" },
  ];
  const formOnSubmit = (e) => {
    e.preventDefault();
  };
  const reg_tos_Hand = () => toast.error("this system has not yet been set up");
  // const shoppingHandler = (e) => {
  //   e.preventDefault();
  // };
  const SlideBarHand = (e) => {
    setMenu({
      isMenu: !menu.isMenu,
    });
  };
  const RegisterHandlarTrue = (e) => {
    setMenu({
      login: true,
    });
  };
  const RegisterHandlarFalse = (e) => {
    setMenu({
      login: false,
      register: false,
    });
  };

  return (
    <>
      <nav>
        <div className="container">
          <div className="row_sb">
            <Link to={"/"}>
              <div className="logo">
                <img src="../../img/footer.logo.png" alt="" />
              </div>
            </Link>
            <div className={classes.catalog}>
              <FaBars onClick={SlideBarHand} />
              <li>
                <Link to={"/catalog"}>Каталог</Link>
              </li>
            </div>
            {menu.isMenu ? (
              <div className={classes.slide_nav}>
                <div className={classes.slidebar}>
                  {navbarArray.map((nav, index) => (
                    <li key={index}>
                      <Link to={nav.to}>{nav.text}</Link>
                    </li>
                  ))}
                </div>
              </div>
            ) : null}
            <form onSubmit={formOnSubmit}>
              <input
                type="text"
                placeholder="Найти товар"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
              <BiSearch className={classes.search_icon} />
            </form>

            <div className={classes.nav_icons}>
              <Link to={'/saved'}>
              <div className={classes.nav_icon}>
                <FaRegHeart />
                <span>Избранное</span>
              </div>
              </Link>
              <Link to={"/shopping"}>
                <div className={classes.nav_icon}>
                  <AiOutlineShoppingCart />
                  <span>Корзина</span>
                </div>
              </Link>
              {/* <div className={classes.click_profile} onClick={ProfHandlar}>
              <div className={classes.my_profile}>
                <div className={classes.my_profile_img}>
                  <img src="../../img/avatar.png" alt="png" />
                </div>
                <div className={classes.user_name}>
                  <h3>Алексей</h3>
                </div>
                <div className={classes.my_prof_icon}>
                  <BsChevronDown />
                </div>
              </div>
            </div> */}

              <div className={classes.register} onClick={RegisterHandlarTrue}>
                <h4>
                  Вход <MdOutlineLogin />
                </h4>
              </div>
              {menu.login ? (
                <div className={classes.register_big_div}>
                  <div className={classes.register_div}>
                    <div
                      className={classes.reg_x}
                      onClick={RegisterHandlarFalse}
                    >
                      <VscChromeClose />
                    </div>
                    <h3>Вход</h3>
                    <label htmlFor="tell">Телефон</label>
                    <input
                      type="text"
                      id="tell"
                      placeholder="+998 90 123 45 67"
                    />
                    <label htmlFor="passwordd">Пароль</label>
                    <input type="text" id="passwordd" />
                    <button onClick={reg_tos_Hand}>
                      Вход <ToastContainer />
                    </button>
                    <div className={classes.reg_but}>
                      <button
                        className={classes.green_but}
                        onClick={(e) => {
                          setMenu({
                            login: false,
                            register: true,
                          });
                        }}
                      >
                        Регистрация
                      </button>
                      <span>Забыли пароль?</span>
                    </div>
                  </div>
                </div>
              ) : null}
              {menu.register ? (
                <div className={classes.register_big_div}>
                  <div className={classes.reg_page}>
                    <div
                      className={classes.reg_x}
                      onClick={RegisterHandlarFalse}
                    >
                      <VscChromeClose />
                    </div>
                    <h3>Регистрация</h3>
                    <h4>Обязательные поля</h4>
                    <form>
                      <div className={classes.reg_form}>
                        <label htmlFor="telll">Телефон</label>
                        <input
                          type="text"
                          id="telll"
                          placeholder="+998 90 123 45 67"
                        />
                      </div>
                      <div className={classes.reg_form}>
                        <label htmlFor="dataa">Дата рождения</label>
                        <input type="date" id="dataa" />
                      </div>
                      <div className={classes.reg_form}>
                        <label htmlFor="sur_name">Фамилия</label>
                        <input type="text" id="sur_name" />
                      </div>
                      <div className={classes.reg_form}>
                        <label htmlFor="name">Имя</label>
                        <input type="text" id="name" />
                      </div>
                      <div className={classes.reg_form}>
                        <label htmlFor="password">Пароль</label>
                        <input type="text" id="password" />
                      </div>
                      <div className={classes.reg_form}>
                        <label htmlFor="more_password">Повторите пароль</label>
                        <input type="text" id="more_password" />
                      </div>
                      <button
                        className={classes.reg_button_new}
                        onClick={reg_tos_Hand}
                      >
                        Продолжить <ToastContainer />
                      </button>
                      <button
                        className={classes.green_but}
                        onClick={(e) => {
                          setMenu({
                            login: true,
                            register: false,
                          });
                        }}
                      >
                        Вход
                      </button>
                    </form>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="row_sb">
          {searchTerm
            ? cards
                .filter((val) =>
                  val.text_area.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((val, index) => (
                  <div className={classes.filter_search}>
                    <Card card={val} key={index} />
                  </div>
                ))
            : ""}
        </div>
      </div>
    </>
  );
};

export default Navbar;
