import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    async updateNews(props) {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c45b6f940fd4d75b089ac668e6c62f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        this.props.setProgress(30);
        let data = await fetch(url);
        this.props.setProgress(40);
        let parsedData = await data.json();
        this.props.setProgress(60);
        this.setState({
            articles: parsedData.articles,
            loading: false,
            totalResults: parsedData.totalResults
        });
        this.props.setProgress(100);
    }
    // componentDidMount() function allow to execute the react code in it when the component is added to the DOM
    async componentDidMount() {
        this.updateNews();
    }
    // handleNextClick = async () => {
    //     this.setState({ page: this.state.page + 1 });
    //     this.updateNews();
    // }
    // handlePrevClick = async () => {
    //     this.setState({ page: this.state.page - 1 });
    //     this.updateNews();
    // }
    fetchMoreData = async ()=>{
        this.setState({page: this.state.page+1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=0c45b6f940fd4d75b089ac668e6c62f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
            totalResults: parsedData.totalResults
        });
    }
    capitalize = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    render() {
        return (
            <div className="container-lg container-fluid my-5 py-3">
                <div className="row news-container">
                    <div className="col-12 mt-2">
                        <h1 style={{ textAlign: 'center' }}>News Headlines!- {this.capitalize(this.props.category)}</h1>
                    </div>
                    <div className="text-center">
                        {this.state.loading && <Spinner />}
                    </div>
                    <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
                        <div className="container-fluid">
                        <div className="row news-container">
                        {this.state.articles.map((element) => {
                            return <div className="col-lg-4 col-md-6 news-card-container" key={element.url}>
                                {/* if element is null then we cannot use slice so we have to use ternary operator */}
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 200) : ""} ImageURL={element.urlToImage ? element.urlToImage : 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} NewsURL={element.url} DatePub={element.publishedAt} />
                            </div>
                        })}
                        </div>
                        </div>
                    </InfiniteScroll>
                    {/* <hr />
                    <div className="col-12 d-flex justify-content-evenly mt-2">
                        <button type='button' onClick={this.handlePrevClick} disabled={this.state.page <= 1} className="btn-dark">&larr; Previous</button>
                        <button type='button' onClick={this.handleNextClick} disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} className="btn-dark">Next &rarr;</button>
                    </div> */}
                </div>
            </div>
        )
    }
}

export default News