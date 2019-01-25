import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Header from "./components/Header";
import LandingScreen from "./components/LandingScreen";

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
