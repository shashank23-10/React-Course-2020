import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  const title = "The Bear and The Fern";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51nvk2Smg3L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
        alt=" "
      />
      <h1>{title}</h1>
      <h5>Shashank Pandey</h5>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
