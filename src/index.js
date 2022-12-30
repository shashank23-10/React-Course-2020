import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

function Booklist() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51nvk2Smg3L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt=" "
  />
);

const Title = () => <h1>The Bear and The Fern</h1>;

const Author = () => <h1>Shashank Pandey</h1>;

ReactDom.render(<Booklist />, document.getElementById("root"));
