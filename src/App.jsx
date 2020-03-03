import React, { useState, useEffect } from "react";

// import { Router } from "@reach/router";
import "./App.css";
import Header from "./Header.jsx";
// import News from "./News.jsx";
import Item from "./Item.jsx";


/////////////////////////////////

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    // this.getNews("business");
    let url = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=e714b70c4494471799b7b36bd08169dc`;

    fetch(url)
      .then(data => data.json())
      .then(response => {
        console.log(response.articles);

        this.setState({
          news: response.articles
        });
      });
  }

  getNews(topic) {
    let url = `https://newsapi.org/v2/top-headlines?country=ua&apiKey=e714b70c4494471799b7b36bd08169dc&category=${topic}`;

    fetch(url)
      .then(data => data.json())
      .then(response => {
        console.log(response.articles);

        this.setState({
          news: response.articles
        });
      });
  }

  render() {
    return (
      <div>
        {/* {Header({ onGetNews: topic => console.log(topic) })} */}

        <Header getNews={this.getNews.bind(this)} componentDidMount={this.componentDidMount.bind(this)} />

        {this.state.news.map(item => {
          // return <h1>{item.title} </h1>;
          return <Item data={item} />;
        })}
      </div>
    );
  }
}

// const fetchNews = category => {
//   const url = `https://newsapi.org/v2/top-headlines?apiKey=e714b70c4494471799b7b36bd08169dc&country=ua&category=${category}s`;

//   return fetch(url)
//     .then(data => data.json())
//     .then(response => response.articles);
// };

// function App() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetchNews().then(fetchedNews => {
//       setNews(fetchedNews);
//     });

//     console.log("hiy");
//   }, []);

//   return (
//     <div className="App">
//       <Header />

//       <Router>
//         <Home path="/" />
//         <News path="/business" category="business" />
//         <News path="/science" category="science" />
//       </Router>

//       {news.length > 0 ? (
//         news.map((item, index) => <News key={index} newsItem={item} />)
//       ) : (
//         <div>Loading...</div>
//       )}
//     </div>
//   );
// }

// function Business() {
//   console.log(fetchNews(Business));

//   return <div>{<News newsItem="business" />}</div>;
// }

// function Scince() {
//   return <div>science</div>;
// }

// function Home() {
//   return <div>home</div>;
// }

// export default App;
