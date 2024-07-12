import { Component } from "react";
import NewsItem from "./NewsItems";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1, // Initialize the page state
    };
  }

  async componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = async (page = 1) => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=bc4dfdddf93843108adae07b5591e0eb&page=${page}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      this.setState({ articles: data.articles, loading: false, page });
    } catch (error) {
      console.error("Error fetching news articles:", error);
      this.setState({ loading: false });
    }
  }

  handleNextClick = () => {
    this.fetchArticles(this.state.page + 1);
  }

  handlePrevClick = () => {
    this.fetchArticles(this.state.page - 1);
  }

  render() {
    const { articles, loading, page } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-4 text-center">Top Headlines</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles && articles.length > 0 ? (
            articles.map((article, index) => (
              <NewsItem
                key={index}
                title={article.title ? article.title.slice(0, 39) : ""}
                description={article.description ? article.description.slice(0, 60) : ""}
                imageUrl={article.urlToImage || "https://via.placeholder.com/400x200"}
                newsUrl={article.url}
              />
            ))
          ) : (
            <p className="text-center col-span-3">No articles found.</p>
          )}
        </div>
        <div className="container flex justify-between my-4">
          <button
            disabled={page <= 1}
            onClick={this.handlePrevClick}
            className={`bg-slate-800 text-white px-3 py-1 my-3 ${page <= 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            &larr; Prev
          </button>
          <button
            onClick={this.handleNextClick}
            className="bg-slate-800 text-white px-3 py-1 my-3"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
