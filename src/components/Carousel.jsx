import React from "react";
import data from "../data.js";

const CarouselItem = (props) => {
  //const { href, title, src, alt } = props;
  let activeClass;
  if (props.title === "A Study In Scarlet") {
    activeClass = "carousel-item active";
  } else {
    activeClass = "carousel-item";
  }

  return (
    <div className={activeClass}>
      <a href={props.href} title={props.title} target="_blank">
        <img src={props.src} className="d-block" alt={props.alt} />
      </a>
    </div>
  );
};

const Carousel = () => {
  const CarouselItems = data.map((dataObject) => {
    return (
      <CarouselItem
        key={dataObject.id}
        href={dataObject.href}
        title={dataObject.title}
        src={`/images/${dataObject.image}`}
        alt={dataObject.alt}
      />
    );
  });

  return (
    <section className="bookshelf-section">
      <h1>Bookshelf</h1>
      <div
        id="bookshelf-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="2"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="3"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="4"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="5"
          ></button>
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="6"
          ></button>
        </div>

        <div className="carousel-inner">{CarouselItems}</div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#bookshelf-carousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#bookshelf-carousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
