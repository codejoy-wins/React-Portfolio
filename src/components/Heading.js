import React, { Component } from 'react'
import About from './AboutMe';

export class Heading extends Component {

    constructor(props){
        super(props);
        this.state = {
            boogie:false,
        }
    }

    boogieTime = ()=>{
        this.setState({
            boogie:!this.state.boogie,
        })
    }
  render() {
      const {boogie} = this.state;
      if(boogie){
          return (
              <div>
                  < About magic={this.boogieTime}/>
              </div>
          )
      }
    return (
      <div id="nest">
        <div id= "spacer">
        
        </div>
        <div onClick={this.boogieTime}>
        
        <span id="here">Click here to learn more about me</span> 
        </div>
      </div>
     
    )
  }
}

export default Heading
