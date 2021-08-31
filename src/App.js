import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  a = 'world!';
  render() {
    return (
      <div>
        Hello {this.a}
      </div>
    )
  }
}