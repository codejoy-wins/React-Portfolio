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
        <p>I'm a <a href="https://www.ucsc.edu/" style={override}>college</a> and <a href="https://www.codingdojo.com/" style={override2}>coding bootcamp</a> graduate, <a href="https://soundcloud.com/maxwelljann" style={override2}>singer-songwriter</a>, <a href="https://codejoy-wins.itch.io/" style={override2}>game designer</a>, <a href="https://www.khanacademy.org/profile/maxjann/" style={override2}>mathematician</a>, philosopher and a <a href="https://lichess.org/@/codejoy" style={override2}>chess player</a> </p>
        <button onClick={()=>this.dostuff()}>collapse</button>
      </div>
    )
  }
}

export default AboutMe
