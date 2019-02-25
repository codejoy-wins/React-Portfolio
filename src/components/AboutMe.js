import React, { Component } from 'react'

export class AboutMe extends Component {
    
  render() {
    const myHead = {
      "color": "deepskyblue",
    }
    return (
      <div>
        <h1 style={myHead}>About Me</h1>
        <p>I'm a college and coding bootcamp graduate skilled in javascipt, html, css, react, python, django, c#, unity, and blender.</p>
      </div>
    )
  }
}

export default AboutMe
