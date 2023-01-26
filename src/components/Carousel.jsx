import React from "react";
import book1 from "../images/book1.jpg";
import book2 from "../images/book2.jpg";
import book3 from "../images/book3.jpg";
import book4 from "../images/book4.jpg";
import book5 from "../images/book5.jpg";
import book6 from "../images/book6.jpg";
import book7 from "../images/book7.jpg";
const Carousel = () => {
  return (
    <section className="bookshelf-section">
      <h1>Bookshelf</h1>
      <div
        id="bookshelf-carousel"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#bookshelf-carousel"
            data-bs-slide-to="0"
            class="active"
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

        <div class="carousel-inner">
          {/* A Study In Scarlet */}
          <div class="carousel-item active">
            <a
              href="https://manybooks.net/book/123113/read#epubcfi(/6/2[titlepage]!/4/1:0)"
              target="_blank"
              title="A Study In Scarlet"
            >
              <img src={book1} className="d-block" alt="Book1" />
            </a>
          </div>
          {/* The Sign of the Four */}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/123109/read#epubcfi(/6/2[item4]!/4/2/1:0)"
              target="_blank"
              title="The Sign of the Four"
            >
              <img src={book2} className="d-block" alt="Book2" />
            </a>
          </div>
          {/*The Adventures of Sherlock Holmes*/}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/123108/read#epubcfi(/6/2[item4]!/4/2/1:0)"
              target="_blank"
              title="The Adventures of Sherlock Holmes"
            >
              <img src={book3} className="d-block" alt="Book3" />
            </a>
          </div>
          {/* The Hound of the Baskervilles */}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/123096/read#epubcfi(/6/2[titlepage]!/4/1:0)"
              target="_blank"
              title="The Hound of the Baskervilles"
            >
              <img src={book4} className="d-block" alt="Book4" />
            </a>
          </div>
          {/* The Return of Sherlock Holmes */}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/123104/read#epubcfi(/6/2[titlepage]!/4/1:0)"
              target="_blank"
              title="The Return of Sherlock Holmes"
            >
              <img src={book5} className="d-block" alt="Book5" />
            </a>
          </div>
          {/* The Valley of Fear */}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/144731/read#epubcfi(/6/2[item4]!/4/2/1:0)"
              target="_blank"
              title="The Valley of Fear"
            >
              <img src={book6} className="d-block" alt="Book6" />
            </a>
          </div>
          {/* His Last Bow */}
          <div class="carousel-item">
            <a
              href="https://manybooks.net/book/165558/read#epubcfi(/6/2[item4]!/4/2/1:0)"
              target="_blank"
              title="His Last Bow"
            >
              <img src={book7} className="d-block" alt="Book7" />
            </a>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#bookshelf-carousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#bookshelf-carousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
