import './index.css';
import React, { useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {
  //created a local environment variable for news api key for security and integrity
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(10);
  const pageSize = 12;
  let ProgressFunc=(prog)=>{
    setProgress(prog);
  }
  return (
    <><Router>
      <Navbar />
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
      </div>
      <Switch>
        {/* we will have to use 'exact' keyword for path and pass a unique key in each news component to make routing work */}
        <Route exact path="/">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="home" pageSize={pageSize} country='in' category='general' />
        </Route>
        <Route exact path="/business">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="business" pageSize={pageSize} country='in' category='business' />
        </Route>
        <Route exact path="/entertainment">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="entertainment" pageSize={pageSize} country='in' category='entertainment' />
        </Route>
        <Route exact path="/general">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="general" pageSize={pageSize} country='in' category='general' />
        </Route>
        <Route exact path="/health">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="health" pageSize={pageSize} country='in' category='health' />
        </Route>
        <Route exact path="/science">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="science" pageSize={pageSize} country='in' category='science' />
        </Route>
        <Route exact path="/sports">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="sports" pageSize={pageSize} country='in' category='sports' />
        </Route>
        <Route exact path="/technology">
          <News apiKey={apiKey} ProgressFunc={ProgressFunc} key="technology" pageSize={pageSize} country='in' category='technology' />
        </Route>
      </Switch>
    </Router>
    </>
  )
}