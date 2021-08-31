import './index.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-3">
          <div className="row news-container">
            <div className="col-12">
              <h1 style={{textAlign:'center'}}>News Headlines!</h1>
            </div>
            <div className="col-md-4 news-card-container">
              <News title='Title Here' description='Description here' ImageURL='https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80' />
            </div>
            <div className="col-md-4 news-card-container">
              <News title='Title Here' description='Description here'/>
            </div>
            <div className="col-md-4 news-card-container">
              <News title='Title Here' description='Description here'/>
            </div>
          </div>
        </div>
      </>
    )
  }
}