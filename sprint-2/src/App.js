import React, { Component} from 'react';
import './App.css';
import "./styles/main.css";
import Header from "./components/Header";
import MainVideo from "./components/MainVideo";
import VideoList from "./components/VideoList";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from "axios"



class App extends Component {

  
  

  render(){
    console.log("App - rendered")
    return (

      <Router>
        <div className="main-doc">
          <Header />
        
            <Switch>
              {/* route 1 */}
              <Route path="/" exact component={MainVideo} />
              {/* route 2 */}
              <Route path="/Main/:id" exact component={MainVideo} />
              {/* route 3 */}
              <Route path="/upload/" exact component={Upload} />

            </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
  