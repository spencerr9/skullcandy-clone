import React, { Component } from 'react';
import './reset.css'
import './App.css'

// COMPONENTS
import Header from "./components/Header/Header.js";
import LandingScreen from "./components/LandingScreen/LandingScreen.js";

class App extends Component {
  componentDidMount(){
    document.title = "Skullcandy | Headphones, Earbuds, Speakers, & More"
  }

  render() {
    return (
      <div className="App">
        <Header />
        <LandingScreen />
      </div>
    );
  }
}

export default App;
