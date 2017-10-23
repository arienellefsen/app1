import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  IndexRoute
} from 'react-router-dom';

// App components
import Header from './components/Header'
import About from './components/About';

const App = (props) => (
  <BrowserRouter>
    <div className="container">
      <Header />
      <Switch>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/about" render={ () => <About title='About' /> } />
        {/* <Route exact path="/portfolio" render={ (props) => <Portfolio title={portfolioData} {...props}/>} />
        <Route path="/portfolio/:id" render={ (props) => <PortfolioDetails title={portfolioData} {...props}/>}/>
        <Route component={NotFound} /> */}
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;