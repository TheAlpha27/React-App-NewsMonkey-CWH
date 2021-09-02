import './index.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageSize={9} country='in' category='sports'/>
      </>
    )
  }
}