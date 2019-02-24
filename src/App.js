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
        {
          "name": "react table",
          "lynk": "https://eager-bhaskara-18e28d.netlify.com/",
          "desc": "React table for practice",
        },
        {
          "name": "react forms",
          "lynk": "https://distracted-saha-afe3a3.netlify.com/",
          "desc": "React forms for practice",
        },
        {
          "name": "react tutorial",
          "lynk": "https://goofy-snyder-724a97.netlify.com/",
          "desc": "Traversy Media Youtube Tutorial",
        }
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
      {
        "name": "react table",
        "lynk": "https://eager-bhaskara-18e28d.netlify.com/",
        "desc": "React table for practice",
      },
      {
        "name": "react forms",
        "lynk": "https://distracted-saha-afe3a3.netlify.com/",
        "desc": "React forms for practice",
      },
      {
        "name": "react tutorial",
        "lynk": "https://goofy-snyder-724a97.netlify.com/",
        "desc": "Traversy Media Youtube Tutorial",
      }
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
        let boo = proj.name.toLowerCase().includes(term.toLowerCase());
        let foo = proj.desc.toLowerCase().includes(term.toLowerCase());
        return (boo || foo);
      })
    })
  }
  
}

  render() {
    const xp = {
      "padding":"1rem",
    }
    return (
      <div className="App">
        <div style={xp}>
        < Heading />

        </div>
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
