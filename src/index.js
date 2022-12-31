import React from "react";
import ReactDom from "react-dom";

//CSS
import "./index.css";

//setup vars
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/717wykgZcBL._AC_UL900_SR900,600_.jpg",
  title: "The January 6th Report",
  author: "Shashank Pandey",
};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  title: "Atomic Habits",
  author: "James Clear",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt=" " />
      <h1>{props.title.toUpperCase()}</h1>
      <h5>{props.author}</h5>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById("root"));
