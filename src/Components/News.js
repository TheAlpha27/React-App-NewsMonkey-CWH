import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export default function News(props) {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);

    const updateNews = async () => {
        props.ProgressFunc(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        props.ProgressFunc(30);
        let data = await fetch(url);
        props.ProgressFunc(40);
        let parsedData = await data.json();
        props.ProgressFunc(60);
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
        props.ProgressFunc(100);
    }
    // componentDidMount() function allow to execute the react code in it when the component is added to the DOM
    useEffect(() => {
        updateNews();
    }, [])
    // handleNextClick = async () => {
    //     setState({ page: page + 1 });
    //     updateNews();
    // }
    // handlePrevClick = async () => {
    //     setState({ page: page - 1 });
    //     updateNews();
    // }
    const fetchMoreData = async () => {
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);
        setTotalResults(parsedData.totalResults);
    }
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className="container-lg container-fluid my-2 py-3">
            <div className="row news-container">
                <div className="col-12 mt-2">
                    <h1 style={{ textAlign: 'center' }}>News Headlines!- {capitalize(props.category)}</h1>
                </div>
                <div className="text-center">
                    {loading && <Spinner />}
                </div>
                <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner />}>
                    <div className="container-fluid">
                        <div className="row news-container">
                            {articles.map((element) => {
                                return <div className="col-lg-4 col-md-6 news-card-container" key={element.url}>
                                    {/* if element is null then we cannot use slice so we have to use ternary operator */}
                                    <NewsItem title={element.title} description={element.description ? element.description.slice(0, 100) : ""} ImageURL={element.urlToImage ? element.urlToImage : 'https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_960_720.jpg'} NewsURL={element.url} DatePub={element.publishedAt} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <hr />
                    <div className="col-12 d-flex justify-content-evenly mt-2">
                        <button type='button' onClick={handlePrevClick} disabled={page <= 1} className="btn-dark">&larr; Previous</button>
                        <button type='button' onClick={handleNextClick} disabled={page + 1 > Math.ceil(totalArticles / props.pageSize)} className="btn-dark">Next &rarr;</button>
                    </div> */}
            </div>
        </div>
    )
}