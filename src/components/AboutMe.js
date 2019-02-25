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

    
    return (
      <div>
        <h1 style={myHead}>About Me</h1>
        <p>I'm a college and coding bootcamp graduate skilled in javascipt, html, css, react, python, django, c#, unity, math, and chess.</p>
        <button onClick={()=>this.dostuff()}>collapse</button>
      </div>
    )
  }
}

export default AboutMe
