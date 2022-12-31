import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup vars
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/717wykgZcBL._AC_UL900_SR900,600_.jpg",
    title: "The January 6th Report",
    author: "Shashank Pandey",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    title: "Atomic Habits",
    author: "James Clear",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}> </Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={props.img} alt=" " />
      <h1>{props.title.toUpperCase()}</h1>
      <h5>{props.author}</h5>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
