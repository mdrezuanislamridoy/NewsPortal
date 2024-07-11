/* eslint-disable react/jsx-key */
import { Component } from "react";
import NewsItems from "./NewsItems";

export default class Dashboard extends Component {
 

  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc4dfdddf93843108adae07b5591e0eb"
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles:parseData.articles})
}
  render() {
    return (
      <>
        <div className="mx-4">
          <div className="grid grid-cols-3 gap-4 my-4 ">
            {this.state.articles.map((el) => (
              <NewsItems title={el.title?el.title.slice(0,39):""} description={el.description?el.description.slice(0,60):""} imageUrl={!el.urlToImage?"https://i0.wp.com/houstonlanding.org/wp-content/uploads/2023/04/20231012_CENTERPOINT-POLES_AT_03.jpg?resize=1024%2C683&ssl=1":el.urlToImage} newsUrl={el.url}/>
            ))}
          </div>
        </div>
      </>
    );
  }
}
