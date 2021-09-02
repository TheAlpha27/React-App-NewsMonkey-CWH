import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c45b6f940fd4d75b089ac668e6c62f4&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        });
    }
    handleNextClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c45b6f940fd4d75b089ac668e6c62f4&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c45b6f940fd4d75b089ac668e6c62f4&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            totalArticles: parsedData.totalResults,
            loading: false
        });
    }
    render() {
        return (
            <div className="container my-5 py-3">
                <div className="row news-container">
                    <div className="col-12 mt-2">
                        <h1 style={{ textAlign: 'center' }}>News Headlines!</h1>
                    </div>
                    <div className="text-center">
                        {this.state.loading && <Spinner />}
                    </div>
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 news-card-container" key={element.url}>
                            {/* if element is null then we cannot use slice so we have to use ternary operator */}
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 100) : ""} ImageURL={element.urlToImage ? element.urlToImage : 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} NewsURL={element.url} DatePub={element.publishedAt.slice(0, 10)} />
                        </div>
                    })}
                    <hr />
                    <div className="col-12 d-flex justify-content-evenly mt-2">
                        <button type='button' onClick={this.handlePrevClick} disabled={this.state.page <= 1} className="btn-dark">&larr; Previous</button>
                        <button type='button' onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn-dark">Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News