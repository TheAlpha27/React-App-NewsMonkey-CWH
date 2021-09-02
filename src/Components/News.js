import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=0c45b6f940fd4d75b089ac668e6c62f4";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles
        });
        }
    render() {
        return (
            <div className="container my-5 py-3">
                <div className="row news-container">
                    <div className="col-12">
                        <h1 style={{ textAlign: 'center' }}>News Headlines!</h1>
                    </div>
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 news-card-container" key={element.url}>
                            {/* if element is null then we cannot use slice so we have to use ternary operator */}
                            <NewsItem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,100):""} ImageURL={element.urlToImage?element.urlToImage:'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} NewsURL={element.url} DatePub={element.publishedAt.slice(0,10)}/>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News