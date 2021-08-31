import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="container py-3">
          <div className="row">
            <div className="col-md-4">
              <News title='Title Here' description='Description here' />
            </div>
            <div className="col-md-4">
              <News title='Title Here' description='Description here' />
            </div>
            <div className="col-md-4">
              <News title='Title Here' description='Description here' />
            </div>
          </div>
        </div>
      </>
    )
  }
}