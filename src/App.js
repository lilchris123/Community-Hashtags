import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./view/Nav/Nav";
import MainContent from './view/MainContent/MainContent';
import Categories from './view/Categories/Categories';
import Login from './view/Login/Login';
import SelectComponent from './view/SelectComponent/SelectComponent';

function App(){
  return(
    <Router>
      <header>
        <Nav/>
      </header>
      
      <Switch>
      <Route path='/' component={MainContent} exact/>
      <Route path='/categories' component={Categories}/>
      <Route path='/login' component={Login}/>
      <Route path='/test' component={SelectComponent}/>
      </Switch>
      
      <footer className="footer d-flex justify-content-center align-content-end">
        <p>copyright</p>
      </footer>
    </Router>
  );
}

export default App;
