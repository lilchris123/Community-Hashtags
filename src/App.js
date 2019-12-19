import React from "react";
import "./css/App.css";
import {Nav} from "./Nav";
import {MainContent} from './MainContent';

function App(){
  return(
    <div>
      <header>
        <Nav/>
        <MainContent/>
      </header>
      
      <footer className="footer d-flex justify-content-center align-content-end">
        <p>copyright</p>
      </footer>
    </div>
  );
}

export default App;
