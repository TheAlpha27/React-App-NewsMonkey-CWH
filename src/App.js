import './index.css';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default class App extends Component {
  //created a local environment variable for news api key for security and integrity
  apiKey = process.env.REACT_APP_NEWS_API;
  state={
    progress: 10
  }
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  pageSize = 12;
  render() {
    return (
      <><Router>
        <Navbar />
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
        </div>
        <Switch>
          {/* we will have to use 'exact' keyword for path and pass a unique key in each news component to make routing work */}
          <Route exact path="/">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="home" pageSize={this.pageSize} country='in' category='general' />
          </Route>
          <Route exact path="/business">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country='in' category='business' />
          </Route>
          <Route exact path="/entertainment">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country='in' category='entertainment' />
          </Route>
          <Route exact path="/general">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country='in' category='general' />
          </Route>
          <Route exact path="/health">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country='in' category='health' />
          </Route>
          <Route exact path="/science">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country='in' category='science' />
          </Route>
          <Route exact path="/sports">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country='in' category='sports' />
          </Route>
          <Route exact path="/technology">
            <News apiKey={this.apiKey} setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country='in' category='technology' />
          </Route>
        </Switch>
      </Router>
      </>
    )
  }
}