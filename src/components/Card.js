/** @format */

import React from "react";
import "./Card.css";

export default function Card({
  color,
  className,
  url,
  name,
  type,
  description,
  video,
  class_name,
}) {
  if (window.matchMedia("(max-width: 460px)").matches) {
    var handler = () => {
      window.open(url, "_blank");
    };
  } else {
    var handler = () => {};
  }
  function gotourl() {
    window.open(url, "_blank");
  }

  return (
    <section className={`card-section ${className}`}>
      <div className="card">
        <div className="flip-card">
          <div className="flip-card__container">
            <div className="card-front">
              <div className={`card-front__tp card-front__tp--${color}`}>
                <h2 className="card-front__heading">{name}</h2>
                <p className="card-front__text-price">{type}</p>
              </div>
              <div className="card-front__bt" onClick={handler}>
                <p
                  className={`card-front__text-view card-front__text-view--${color}`}
                >
                  View
                </p>
              </div>
            </div>
            <div className="card-back">
              <video className="video__container" autoPlay muted loop>
                <source className="video__media" src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        <div className="inside-page">
          <div className="inside-page__container">
            <h3
              className={`inside-page__heading inside-page__heading--${color} ${class_name}`}
            >
              {name}
            </h3>
            <p className={`inside-page__text--${color}`}>{description}</p>
            <button
              onClick={gotourl}
              className={`inside-page__btn inside-page__btn--${color}`}
            >
              Website
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
