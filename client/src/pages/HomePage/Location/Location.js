import React from "react";
import MapButtons from "../../../components/MapButtons/MapButtons";
import classes from "./Location.module.css";
import Iframe from "react-iframe";

const Location = () => {
  const MapButtonArr = [
    { text: "п.Щельяюр" },
    { text: "п.Щельяюр" },
    { text: "п.Щельяюр" },
    { text: "п.Щельяюр" },
  ];

  return (
    <div className={classes.Location}>
      <div className="container">
        <div className="title_h2_36">
          <div className="h2_36_title">
            <h2 className="h2_36">Наши магазины</h2>
          </div>
        </div>
        <div className="row">
          {MapButtonArr.map((text, index) => (
            <MapButtons text={text} key={index} />
          ))}
        </div>
        <div className={classes.map}>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24117.788271164856!2d69.5976237!3d40.92180735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1655381212684!5m2!1sru!2s"
            width="100%"
            height="354"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
