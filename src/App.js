import React, { Component } from 'react';
import logo from './logo.svg';
import About from './components/AboutMe';
import Table from './components/Table';
import './App.css';


class App extends Component {
  state = {
    projects: [
        {
            "name": "react colors",
            "lynk": "https://kind-babbage-529f5c.netlify.com/",
            "desc": "React color manipulation",

        },
        {
            "name": "react speed",
            "lynk": "https://admiring-allen-88af04.netlify.com/",
            "desc": "React speed manipulation",
        },
        {
            "name": "react gallery",
            "lynk": "https://dazzling-keller-4338a6.netlify.com/?fooled",
            "desc": "React image gallery",
        },
    ],
}
  render() {
    return (
      <div className="App">
        < About />
        < Table info={this.state.projects}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            John Snow
          </p>
          <a
            className="App-link"
            href="https://maxjann.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jann Software
          </a>
        </header>
      </div>
    );
  }
}

export default App;
