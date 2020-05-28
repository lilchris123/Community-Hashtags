import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import Nav from "./view/Nav/Nav";
import MainContentContainer from './view/MainContent/MainContentContainer';
import Login from './view/Login/Login';
import CategoriesContainer from './view/Categories/CategoriesContainer';
import CategoryPageContainer from "./view/CategoryPage/CategoryPageContainer";

function App(){
  return(
    <Router>
      <header>
        <Nav/>
      </header>
      
      <Switch>
      <Route path='/' component={MainContentContainer} exact/>
      <Route path='/categories' component={CategoriesContainer} exact strict/>
      <Route path='/login' component={Login}/>
      <Route path='/category/:category' component={CategoryPageContainer}/>
      </Switch>
      
      <footer className="footer d-flex justify-content-center align-content-end">
        <p>Copyright © 2020 Chris Mayol. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
