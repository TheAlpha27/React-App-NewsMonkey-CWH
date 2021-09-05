import React from 'react'
import PropTypes from 'prop-types'

export default function NewsItem(props) {
        let { title, description, ImageURL, NewsURL, DatePub } = props;
        return (
            <div className="card my-3 mx-3" style={{width: '23rem'}}>
                <img className="news-img" src={ImageURL} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}...</p>
                </div>
                <div className="dateDiv">
                    <a href={NewsURL} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark read">Read More</a><p className="dateString"><strong>Updated:</strong> {new Date(DatePub).toGMTString()}</p>
                </div>
            </div>
        )
    }