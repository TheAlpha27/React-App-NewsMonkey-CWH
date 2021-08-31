import React, { Component } from 'react'

export class News extends Component {
    render() {
        let {title, description} = this.props;
        return (
            <div class="card my-3 mx-3" style={{width: '18rem'}}>
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        )
    }
}

export default News
