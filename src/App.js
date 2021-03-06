import React, { Component } from 'react';
import Table from './components/Table';
import Form from './components/Form';
import Heading from './components/Heading';
import './App.css';

// I add to this code because it is a useful directory

class App extends Component {
  state = {
    display: {
      "color": "white",
      "background": "blue",
      "margin": "0 auto",
      "padding": "1vw",
      "fontSize": "2.24vw",
    }, 
    
    projects: [
      {
        name: "Meme Creator",
        "lynk": "https://silly-beaver-54dddd.netlify.com/",
        "desc": "Make your own meme",
        "tech": "React"
      },
      {
        name: "Joker Review",
        "lynk": "https://clever-pasteur-d77dd1.netlify.com/",
        "desc": "Joker Movie Review",
        "tech": "HTML CSS"
      },
      {
        name: "Browns",
        "lynk": "https://naughty-saha-500c27.netlify.com/",
        "desc": "Season Predictions",
        "tech": "React"
      },
      {
        name: "Tutoring Business",
        "lynk": "https://pedantic-curie-d6a10d.netlify.com/",
        "desc": "Math and Chess",
        "tech": "React"
      },
      {
        name: "Form Practice",
        "lynk": "https://pensive-mayer-86ad04.netlify.com/",
        "desc": "React practice",
        "tech": "React"
      },
      {
        "name": "Westlake Fantasy Football",
        "lynk": "http://18.222.207.191/",
        "desc": "Fullstack Development with Python/Django/AWS",
        "tech": "Django, Python, AWS, HTML, CSS",
      },
      {
        "name": "game browser",
        "lynk": "https://cocky-leavitt-f7e993.netlify.com/",
        "desc": "All my Unity Games playable in one place",
        "tech": "HTML, JS, CSS, Unity, C#, Blender",
      },
      {
        "name": "main portfolio",
        "lynk": "https://codejoy-wins.github.io/",
        "desc": "Edited a template for mobile-first responsive design",
        "tech": "Bootstrap Greyscale Template, HTML, CSS, JS",
      },
      {
        "name": "Old Portfolio",
        "lynk": "https://happy-mirzakhani-505c0a.netlify.com/",
        "desc": "Old portfolio",
        "tech": "JS, HTML, CSS, Github Pages",
      },
      {
        "name": "Twelve Articles",
        "lynk": "https://clever-rosalind-14684b.netlify.com/",
        "desc": "My LinkedIn Articles",
        "tech": "React, God"
      },
      {
        "name": "Blasphemy",
        "lynk": "https://eloquent-meninsky-66f587.netlify.com/",
        "desc": "To cheer you up",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      {
        name: "From Memory",
        "lynk": "https://inspiring-mayer-16a537.netlify.com/",
        "desc": "Built from memory",
        "tech": "React"
      },
      {
        name: "React Formal",
        "lynk": "https://quirky-lovelace-fb3373.netlify.com/",
        "desc": "Built from scratch in under 1 hour",
        "tech": "React"
      },
      {
        name: "Browns Todo App 2",
        "lynk": "https://stupefied-morse-fa8726.netlify.com/",
        "desc": "Built from scratch in under 1 hour",
        "tech": "React"
      },
      {
        name: "Browns Todo App",
        "lynk": "https://vigorous-mccarthy-e1b2e5.netlify.com/",
        "desc": "Built from scratch in 2 hours",
        "tech": "React"
      },
      {
        "name": "Blasphemy",
        "lynk": "https://eloquent-meninsky-66f587.netlify.com/",
        "desc": "To cheer you up",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      // https://focused-hermann-243062.netlify.com/
      {
        "name": "Todo 2",
        "lynk": "https://focused-hermann-243062.netlify.com/",
        "desc": "From Scratch Again!",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Todo",
        "lynk": "https://fervent-poincare-7d1c70.netlify.com/",
        "desc": "From Scratch!",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Power Rankings",
        "lynk": "https://distracted-rosalind-e88562.netlify.com/",
        "desc": "For my fantasy league",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "React Rap",
        "lynk": "https://elastic-torvalds-f1a444.netlify.com/",
        "desc": "Made from scratch",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Blue",
        "lynk": "https://youthful-jackson-b5eb02.netlify.com/",
        "desc": "Gallery",
        "tech": "HTML, CSS, JS"
      },
      {
        "name": "Magnus Carlsen",
        "lynk": "https://goofy-bhaskara-670258.netlify.com/",
        "desc": "Chess News",
        "tech": "HTML, CSS"
      },
      {
        "name": "Elam Ahpla",
        "lynk": "https://objective-goldstine-dd463f.netlify.com/",
        "desc": "Date and Time Teller",
        "tech": "HTML, CSS, JS, React"
      },
      {
        "name": "Form",
        "lynk": "https://heuristic-mahavira-4b7404.netlify.com/",
        "desc": "Vanilla JS",
        "tech": "HTML, CSS, JS"
      },
      {
        "name": "Lakers",
        "lynk": "https://peaceful-poincare-48e2af.netlify.com/",
        "desc": "Big 3",
        "tech": "HTML, CSS"
      },
      {
        "name": "Goku",
        "lynk": "https://eloquent-einstein-845fe7.netlify.com/",
        "desc": "OOP battle",
        "tech": "JS, HTML, CSS"
      },
      {
        "name": "Nav bar",
        "lynk": "https://dreamy-tereshkova-45f1e4.netlify.com/",
        "desc": "Practice",
        "tech": "HTML, CSS",
      },
      {
        "name": "Money",
        "lynk": "https://serene-shaw-75ee22.netlify.com/",
        "desc": "Sidebar practice",
        "tech": "HTML, CSS"
      },
      
      {
        "name": "Pretty Colors",
        "lynk": "https://ecstatic-poitras-45b6fc.netlify.com/",
        "desc": "Linear Gradients",
        "tech": "HTML, CSS"
      },
      {
        "name": "Browns Hype",
        "lynk": "https://flamboyant-hodgkin-c9a684.netlify.com/",
        "desc": "Odell pix",
        "tech": "HTML, CSS"
      },
      {
        "name": "Art Portfolio",
        "lynk": "https://wendyjann.com/",
        "desc": "For my mom",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Wisdom",
        "lynk": "https://gifted-curran-a64a6a.netlify.com/",
        "desc": "Messing around",
        "tech": "React"
      },
      {
        "name": "Chess",
        "lynk": "https://happy-lamport-7d58dd.netlify.com/",
        "desc": "Chess opening strategies",
        "tech": "React"
      },
      {
        "name": "Twelve Articles",
        "lynk": "https://clever-rosalind-14684b.netlify.com/",
        "desc": "My LinkedIn Articles",
        "tech": "React, God"
      },
      {
        "name": "React Hooks",
        "lynk": "https://tender-shannon-7c069f.netlify.com/",
        "desc": "React Hooks Todo List",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      {
        "name": "Personal Website",
        "lynk": "https://practical-saha-e8a1a8.netlify.com/",
        "desc": "For Justin Griffin",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Fantasy Shrine",
        "lynk": "https://condescending-albattani-0a1334.netlify.com/",
        "desc": "For the league champ",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Actor Photo Reel",
        "lynk": "https://wizardly-wright-170b65.netlify.com/",
        "desc": "Ad for my actor friend, Daniel.",
        "tech": "React Hooks, JS, HTML, CSS, Netlify, Github"
      },
      {
        "name": "Advertisement",
        "lynk": "https://trusting-blackwell-950c36.netlify.com/?fbclid=IwAR3l242tKz2QPoRsEhuBcCN3CtyUeXVvd3x8XB6hDzKIf0KT9Dov1L8wQlA",
        "desc": "Ad for potential business.  Animation on custom image",
        "tech": "React, JS, HTML, CSS, Netlify, Github"
      },
      {
        "name": "React Time",
        "lynk": "https://objective-turing-d5177f.netlify.com/",
        "desc": "Using Date objects and Hooks",
        "tech": "React Hooks, JS, HTML, CSS, Netlify"
      },
      {
        "name": "React Tac Toe",
        "lynk": "https://quizzical-wozniak-503971.netlify.com/",
        "desc": "Tic Tac Toe Game with Cat Gif",
        "tech": "React, JS, HTML, CSS, Netlify"
      },
      {
          "name": "react colors",
          "lynk": "https://kind-babbage-529f5c.netlify.com/",
          "desc": "React color manipulation",
          "tech": "React, HTML, CSS, JS, VS Code",

      },
      {
          "name": "react speed",
          "lynk": "https://admiring-allen-88af04.netlify.com/",
          "desc": "React speed manipulation",
          "tech": "React, HTML, CSS, JS, VS Code",

      },
      {
          "name": "react gallery",
          "lynk": "https://dazzling-keller-4338a6.netlify.com/?fooled",
          "desc": "React image gallery",
          "tech": "React, HTML, CSS, JS, VS Code",

      },
      {
        "name": "react table",
        "lynk": "https://eager-bhaskara-18e28d.netlify.com/",
        "desc": "React table for practice",
        "tech": "React, HTML, CSS, JS, VS Code",

      },
      {
        "name": "react forms",
        "lynk": "https://distracted-saha-afe3a3.netlify.com/",
        "desc": "React forms for practice",
        "tech": "React, HTML, CSS, JS, VS Code",

      },
      {
        "name": "game browser",
        "lynk": "https://cocky-leavitt-f7e993.netlify.com/",
        "desc": "All my Unity Games playable in one place",
        "tech": "HTML, JS, CSS, C#, Unity, Blender",
      },
      {
        "name": "main portfolio",
        "lynk": "https://codejoy-wins.github.io/",
        "desc": "Edited a template for mobile-first responsive design",
        "tech": "Bootstrap Greyscale Template, HTML, CSS, JS",
      },
      {
        "name": "Westlake Fantasy Football",
        "lynk": "http://18.222.207.191/",
        "desc": "Fullstack Development with Python/Django/AWS",
        "tech": "Django, Python, AWS, HTML, CSS",
      },
      {
        "name": "Old Portfolio",
        "lynk": "https://happy-mirzakhani-505c0a.netlify.com/",
        "desc": "Old portfolio",
        "tech": "JS, HTML, CSS, Github Pages",
      },
      {
        "name": "DBZ2",
        "lynk": "https://keen-pare-61d7ca.netlify.com/",
        "desc": "OOP battle game with sound",
        "tech": "JS, HTML, CSS, Netlify"
      },
      {
        "name": "DJ Alien",
        "lynk": "https://pensive-lumiere-228b4a.netlify.com/",
        "desc": "Random song player of limited db",
        "tech": "JS, HTML, CSS, Netlify"
      },
      {
        "name": "Redux Rotating Text",
        "lynk": "https://cocky-colden-aa4cf6.netlify.com/?fbclid=IwAR35EcczVmhHFP17ViVv0TlKhhdKJjFDXPAXJ8FJgcS6gMN8ZxQd0_7bVy8",
        "desc": "fun animation during tutorial",
        "tech": "JS, React, Redux, CSS, Netlify, Github"
      }
    ],
    // https://tender-shannon-7c069f.netlify.com/
    // https://eloquent-meninsky-66f587.netlify.com/
    // 
    // https://goofy-bhaskara-670258.netlify.com/

    // https://fervent-poincare-7d1c70.netlify.com/


    permaProjects: [
      {
        name: "Meme Creator",
        "lynk": "https://silly-beaver-54dddd.netlify.com/",
        "desc": "Make your own meme",
        "tech": "React"
      },
      {
        name: "Joker Review",
        "lynk": "https://clever-pasteur-d77dd1.netlify.com/",
        "desc": "Joker Movie Review",
        "tech": "HTML CSS"
      },
      {
        name: "Browns",
        "lynk": "https://naughty-saha-500c27.netlify.com/",
        "desc": "Season Predictions",
        "tech": "React"
      },
      {
        name: "Tutoring Business",
        "lynk": "https://pedantic-curie-d6a10d.netlify.com/",
        "desc": "Math and Chess",
        "tech": "React"
      },
      {
        name: "Form Practice",
        "lynk": "https://pensive-mayer-86ad04.netlify.com/",
        "desc": "React practice",
        "tech": "React"
      },
      {
        "name": "Westlake Fantasy Football",
        "lynk": "http://18.222.207.191/",
        "desc": "Fullstack Development with Python/Django/AWS",
        "tech": "Django, Python, AWS, HTML, CSS",
      },
      {
        "name": "game browser",
        "lynk": "https://cocky-leavitt-f7e993.netlify.com/",
        "desc": "All my Unity Games playable in one place",
        "tech": "HTML, JS, CSS, Unity, C#, Blender",
      },
      {
        "name": "main portfolio",
        "lynk": "https://codejoy-wins.github.io/",
        "desc": "Edited a template for mobile-first responsive design",
        "tech": "Bootstrap Greyscale Template, HTML, CSS, JS",
      },
      {
        "name": "Old Portfolio",
        "lynk": "https://happy-mirzakhani-505c0a.netlify.com/",
        "desc": "Old portfolio",
        "tech": "JS, HTML, CSS, Github Pages",
      },
      {
        "name": "Twelve Articles",
        "lynk": "https://clever-rosalind-14684b.netlify.com/",
        "desc": "My LinkedIn Articles",
        "tech": "React, God"
      },
      {
        "name": "Blasphemy",
        "lynk": "https://eloquent-meninsky-66f587.netlify.com/",
        "desc": "To cheer you up",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      {
        name: "From Memory",
        "lynk": "https://inspiring-mayer-16a537.netlify.com/",
        "desc": "Built from memory",
        "tech": "React"
      },
      {
        name: "React Formal",
        "lynk": "https://quirky-lovelace-fb3373.netlify.com/",
        "desc": "Built from scratch in under 1 hour",
        "tech": "React"
      },
      {
        name: "Browns Todo App 2",
        "lynk": "https://stupefied-morse-fa8726.netlify.com/",
        "desc": "Built from scratch in under 1 hour",
        "tech": "React"
      },
      {
        name: "Browns Todo App",
        "lynk": "https://vigorous-mccarthy-e1b2e5.netlify.com/",
        "desc": "Built from scratch in 1 hour",
        "tech": "React"
      },
      {
        "name": "Blasphemy",
        "lynk": "https://eloquent-meninsky-66f587.netlify.com/",
        "desc": "To cheer you up",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      {
        "name": "Todo 2",
        "lynk": "https://focused-hermann-243062.netlify.com/",
        "desc": "From Scratch Again!",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Todo",
        "lynk": "https://fervent-poincare-7d1c70.netlify.com/",
        "desc": "From Scratch!",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Power Rankings",
        "lynk": "https://distracted-rosalind-e88562.netlify.com/",
        "desc": "For my fantasy league",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "React Rap",
        "lynk": "https://elastic-torvalds-f1a444.netlify.com/",
        "desc": "Made from scratch",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Blue",
        "lynk": "https://youthful-jackson-b5eb02.netlify.com/",
        "desc": "Gallery",
        "tech": "HTML, CSS, JS"
      },
      {
        "name": "Magnus Carlsen",
        "lynk": "https://goofy-bhaskara-670258.netlify.com/",
        "desc": "Chess News",
        "tech": "HTML, CSS"
      },
      {
        "name": "Elam Ahpla",
        "lynk": "https://objective-goldstine-dd463f.netlify.com/",
        "desc": "Date and Time Teller",
        "tech": "HTML, CSS, JS, React"
      },
      {
        "name": "Form",
        "lynk": "https://heuristic-mahavira-4b7404.netlify.com/",
        "desc": "Vanilla JS",
        "tech": "HTML, CSS, JS"
      },
      {
        "name": "Lakers",
        "lynk": "https://peaceful-poincare-48e2af.netlify.com/",
        "desc": "Big 3",
        "tech": "HTML, CSS"
      },
      {
        "name": "Goku",
        "lynk": "https://eloquent-einstein-845fe7.netlify.com/",
        "desc": "OOP battle",
        "tech": "JS, HTML, CSS"
      },
      {
        "name": "Nav bar",
        "lynk": "https://dreamy-tereshkova-45f1e4.netlify.com/",
        "desc": "Practice",
        "tech": "HTML, CSS",
      },
      {
        "name": "Money",
        "lynk": "https://serene-shaw-75ee22.netlify.com/",
        "desc": "Sidebar practice",
        "tech": "HTML, CSS"
      },
      {
        "name": "Pretty Colors",
        "lynk": "https://ecstatic-poitras-45b6fc.netlify.com/",
        "desc": "Linear Gradients",
        "tech": "HTML, CSS"
      },
      {
        "name": "Browns Hype",
        "lynk": "https://flamboyant-hodgkin-c9a684.netlify.com/",
        "desc": "Odell pix",
        "tech": "HTML, CSS"
      },
      {
        "name": "Art Portfolio",
        "lynk": "https://wendyjann.com/",
        "desc": "For my mom",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Wisdom",
        "lynk": "https://gifted-curran-a64a6a.netlify.com/",
        "desc": "Messing around",
        "tech": "React"
      },
      {
        "name": "Chess",
        "lynk": "https://happy-lamport-7d58dd.netlify.com/",
        "desc": "Chess opening strategies",
        "tech": "React"
      },
      {
        "name": "Twelve Articles",
        "lynk": "https://clever-rosalind-14684b.netlify.com/",
        "desc": "My LinkedIn Articles",
        "tech": "React, God"
      },
      {
        "name": "React Hooks",
        "lynk": "https://tender-shannon-7c069f.netlify.com/",
        "desc": "React Hooks Todo List",
        "tech": "JS, HTML, CSS, React, Hooks"
      },
      {
        "name": "Personal Website",
        "lynk": "https://practical-saha-e8a1a8.netlify.com/",
        "desc": "For Justin Griffin",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Fantasy Shrine",
        "lynk": "https://condescending-albattani-0a1334.netlify.com/",
        "desc": "For the league champ",
        "tech": "JS, HTML, CSS, React"
      },
      {
        "name": "Actor Photo Reel",
        "lynk": "https://wizardly-wright-170b65.netlify.com/",
        "desc": "Ad for my actor friend, Daniel.",
        "tech": "React Hooks, JS, HTML, CSS, Netlify, Github"
      },
      {
        "name": "Advertisement",
        "lynk": "https://trusting-blackwell-950c36.netlify.com/?fbclid=IwAR3l242tKz2QPoRsEhuBcCN3CtyUeXVvd3x8XB6hDzKIf0KT9Dov1L8wQlA",
        "desc": "Ad for potential business.  Animation on custom image",
        "tech": "React, JS, HTML, CSS, Netlify, Github"
      },
      {
        "name": "React Time",
        "lynk": "https://objective-turing-d5177f.netlify.com/",
        "desc": "Using Date objects and Hooks",
        "tech": "React Hooks, JS, HTML, CSS, Netlify"
      },
      {
        "name": "React Tac Toe",
        "lynk": "https://quizzical-wozniak-503971.netlify.com/",
        "desc": "Tic Tac Toe Game with Cat Gif",
        "tech": "React, JS, HTML, CSS, Netlify"
      },
      {
          "name": "react colors",
          "lynk": "https://kind-babbage-529f5c.netlify.com/",
          "desc": "React color manipulation",
          "tech": "React, HTML, CSS, JS, VS Code",
      },
      {
          "name": "react speed",
          "lynk": "https://admiring-allen-88af04.netlify.com/",
          "desc": "React speed manipulation",
          "tech": "React, HTML, CSS, JS, VS Code",
      },
      {
          "name": "react gallery",
          "lynk": "https://dazzling-keller-4338a6.netlify.com/?fooled",
          "desc": "React image gallery",
          "tech": "React, HTML, CSS, JS, VS Code",
      },
      {
        "name": "react table",
        "lynk": "https://eager-bhaskara-18e28d.netlify.com/",
        "desc": "React table for practice",
        "tech": "React, HTML, CSS, JS, VS Code",
      },
      {
        "name": "react forms",
        "lynk": "https://distracted-saha-afe3a3.netlify.com/",
        "desc": "React forms for practice",
        "tech": "React, HTML, CSS, JS, VS Code",
      },
      {
        "name": "game browser",
        "lynk": "https://cocky-leavitt-f7e993.netlify.com/",
        "desc": "All my Unity Games playable in one place",
        "tech": "HTML, JS, CSS, Unity, C#, Blender",
      },
      {
        "name": "main portfolio",
        "lynk": "https://codejoy-wins.github.io/",
        "desc": "Edited a template for mobile-first responsive design",
        "tech": "Bootstrap Greyscale Template, HTML, CSS, JS",
      },
      {
        "name": "Westlake Fantasy Football",
        "lynk": "http://18.222.207.191/",
        "desc": "Fullstack Development with Python/Django/AWS",
        "tech": "Django, Python, AWS, HTML, CSS",
      },
      {
        "name": "Old Portfolio",
        "lynk": "https://happy-mirzakhani-505c0a.netlify.com/",
        "desc": "Old portfolio",
        "tech": "JS, HTML, CSS, Github Pages",
      },
      {
        "name": "DBZ2",
        "lynk": "https://keen-pare-61d7ca.netlify.com/",
        "desc": "OOP battle game with sound",
        "tech": "JS, HTML, CSS, Netlify"
      },
      {
        "name": "DJ Alien",
        "lynk": "https://pensive-lumiere-228b4a.netlify.com/",
        "desc": "Random song player of limited db",
        "tech": "JS, HTML, CSS, Netlify"
      },
      // https://cocky-colden-aa4cf6.netlify.com/?fbclid=IwAR35EcczVmhHFP17ViVv0TlKhhdKJjFDXPAXJ8FJgcS6gMN8ZxQd0_7bVy8
      {
        "name": "Redux Rotating Text",
        "lynk": "https://cocky-colden-aa4cf6.netlify.com/?fbclid=IwAR35EcczVmhHFP17ViVv0TlKhhdKJjFDXPAXJ8FJgcS6gMN8ZxQd0_7bVy8",
        "desc": "fun animation during tutorial",
        "tech": "JS, React, Redux, CSS, Netlify, Github"
      }
      
  ],
    searchTerm: '',
    speed: 5,
    color: "goldenrod",
    charging: false,
    charged: false,
}

// rainbow

// charger

// background color change

ender = ()=>{
  console.log("ender function on mouse up");
  const colors = ["mediumslateblue","ivory", "orchid","mediumorchid","lightyellow","orange", "gold", "purple", "deeppink", "silver"];

  setTimeout(()=>{ console.log("ender func"); this.setState({
    charged:true,
    color: colors[Math.floor(Math.random(0,1)*colors.length)],
    speed: .6,
  }) }, 3000);
}

charger = ()=>{
  console.log("charger function");
  console.log(`current charging bool is ${this.state.charging}`);
  const colors = ["mediumslateblue","mediumpurple","mediumorchid","darkmagenta","lawngreen","blue", "aliceblue", "red", "green", "maroon"];
  this.setState({
    charging: true,
    speed: 4 * Math.random(0,1),
    color: colors[Math.floor(Math.random(0,1)*colors.length)],
  })
}

exhaust = ()=>{
  console.log("double");
  this.setState({
    charged: false,
    charging: false,
    speed: 0,
  })
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
        let roo = proj.tech.toLowerCase().includes(term.toLowerCase());
        return (boo || foo || roo);
      })
    })
  }
  
}

  render() {
    const xp = {
      "padding":"1rem",
    }
// turn this css into react element
    // .App-logo {
    //   animation: App-logo-spin infinite 20s linear;
    //   height: 40vmin;
    //   pointer-events: none;
    // }

    const { color, speed } = this.state;

    const Anime = {
      "animation": `App-logo-spin infinite ${speed}s linear`,
      "height": "40vmin",
      "pointerEvents": "none",
    }

    const kill = {
      "padding":"10px",
      "background": "skyblue",
      "opacity": .5,
      "color": "red",
    }
    const MyLogo = ()=> {
      return (
        <svg style={Anime} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 841.9 595.3">
        <g fill={color}>
          <path d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z"/>
          <circle cx="420.9" cy="296.5" r="45.7"/>
          <path d="M520.5 78.1z"/>
        </g>
        </svg>
      )
    }
    return (
      <div className="App">
        <div style={xp}>
        < Heading />
        </div>
        < Form tracker={this.appTracker} />
        <div style={this.state.display}>
        < Table magicTerm={this.state.searchTerm} info={this.state.projects}/>
        </div>
        <header className="App-header">
          <div onClick={()=>this.charger}  onMouseDown={this.charger} onMouseUp={this.ender}>
            < MyLogo />
          </div>
          <div style={kill} onClick={()=>this.exhaust()}>Stabilizer</div>
          <p>
            <a href="https://docs.google.com/document/d/18PHJgDyQsG-kiD_Y9-0akk-GXH_SME6_p6cPZutIPpA/edit?usp=sharing">View My Resume</a>
          </p>
          <a
            className="App-link"
            href="https://github.com/codejoy-wins"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jann Software
          </a> maxwellljann@gmail.com
        </header>
      </div>
    );
  }
}

export default App;
