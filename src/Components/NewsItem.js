import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let { title, description, ImageURL, NewsURL, DatePub } = this.props;
        return (
            <div className="card my-3 mx-3" style={{ width: '18rem' }}>
                <img className="news-img" src={ImageURL} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                </div>
                <div className="dateDiv">
                    <a href={NewsURL} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    <div><strong>Updated:</strong> {DatePub}</div>
                </div>
            </div>
        )
    }
}