import React from "react";
import "./Header.css";

function Header({
  getNews,
  componentDidMount
}) {

  return ( <
    div >
    <
    h1 onClick = {
      () => componentDidMount()
    }
    className = "nav-title" > NEWS < /h1> <
    div className = "navigation-wrap" >
    <
    div className = "navigation" >
    <
    div onClick = {
      () => getNews("business")
    } > < a > Бизнес < /a> </div >
    <
    div onClick = {
      () => getNews("science")
    } > < a > Наука < /a></div >
    <
    div onClick = {
      () => getNews("sports")
    } > < a > Спорт < /a></div >
    <
    div onClick = {
      () => getNews("technology")
    } > < a > Технологии < /a></div > {

    } <
    /div>  < /
    div >


    <
    /div>
  );
}

export default Header;
