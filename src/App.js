import React, { Component } from 'react';
import logo from './logo.svg';
import Table from './components/Table';
import Form from './components/Form';
import Heading from './components/Heading';
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
    permaProjects: [
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
    searchTerm: '',
}

// tracker

appTracker = term =>{
  console.log("chilling in app.js");
  this.setState({
    searchTerm: term,
  });
  console.log(`term length is ${term.length}`);
  if(term.length <1){
    console.log("conditional");
    this.setState({
      projects: this.state.permaProjects,
    })
  }else{
    this.setState({
      projects: this.state.projects.filter((proj, spot) => {
        let boo = proj.name.includes(term);
        let foo = proj.desc.includes(term);
        return (boo || foo);
      })
    })
  }
  
}

  render() {
    return (
      <div className="App">
        < Heading />
        < Form tracker={this.appTracker} />
        < Table magicTerm={this.state.searchTerm} info={this.state.projects}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Someday click and charge up spin
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
