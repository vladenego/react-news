import React, {
  useState,
  useEffect
} from "react";

import "./App.css";
import Header from "./Header.jsx";
import Item from "./Item.jsx";



export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=e714b70c4494471799b7b36bd08169dc`;

    fetch(url)
      .then(data => data.json())
      .then(response => {

        this.setState({
          news: response.articles
        });
      });
  }

  getNews(topic) {
    let url = `https://newsapi.org/v2/top-headlines?country=ru&apiKey=e714b70c4494471799b7b36bd08169dc&category=${topic}`;

    fetch(url)
      .then(data => data.json())
      .then(response => {


        this.setState({
          news: response.articles
        });
      });
  }

  render() {
    return ( <
      div >


      <
      Header getNews = {
        this.getNews.bind(this)
      }
      componentDidMount = {
        this.componentDidMount.bind(this)
      }
      />

      {
        this.state.news.map(item => {

          return <Item data = {
            item
          }
          key = {
            item.id
          }
          />;
        })
      } <
      /div>
    );
  }
}
