import React, { Component } from 'react'

export class AboutMe extends Component {



    dostuff = ()=>{
      const { magic } = this.props;
      magic();
    }
    
  render() {

    const myHead = {
      "color": "deepskyblue",
    }
    const override = {
      "color": "blue",
    }
    const override2 = {
      "color": "blue",
    }
    
    return (
      <div>
        <h1 style={myHead}>About Me</h1>
        <p>I'm a <a href="https://www.ucsc.edu/" style={override}>college</a> and <a href="https://www.codingdojo.com/" style={override2}>coding bootcamp</a> graduate skilled in javascipt, html, css, react, python, django, c#, unity, math, and chess.</p>
        <button onClick={()=>this.dostuff()}>collapse</button>
      </div>
    )
  }
}

export default AboutMe
