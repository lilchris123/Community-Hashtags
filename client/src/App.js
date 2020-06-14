import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import style from "./App.module.scss";
import NavContainer from "./view/Nav/NavContainer";
import MainContentContainer from './view/MainContent/MainContentContainer';
import LoginContainer from './view/Login/LoginContainer';
import RegisterContainer from './view/Register/RegisterContainer';
import CategoriesContainer from './view/Categories/CategoriesContainer';
import PostsPageContainer from "./view/PostsPage/PostsPageContainer";
import MyPageContainer from './view/MyPage/MyPageContainer';
import SearchContainer from './view/Search/SearchContainer';
// import NotFound from './shared/components/NotFound/NotFound';

function App(){
  return(
    <Router>
      <header>
        <NavContainer/>
      </header>
      
      <Switch>
      <Route path='/' component={MainContentContainer} exact/>
      <Route path='/categories' component={CategoriesContainer} exact strict/>
      <Route path='/login' component={LoginContainer}/>
      <Route path='/register' component={RegisterContainer}/>
      <Route path='/category/:category' component={PostsPageContainer}/>
      <Route path='/mypage' component={MyPageContainer}/>
      <Route path='/search' component={SearchContainer}/>
      <Redirect path='*' to='/' component={MainContentContainer}/>
      </Switch>
      
      <footer className={`${style.footer} d-flex justify-content-center align-content-center`}>
        <p>Copyright © 2020 Chris Mayol. All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
