import React, { Component } from 'react'
import About from './AboutMe';

export class Heading extends Component {

    constructor(props){
        super(props);
        this.state = {
            boogie:true,
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
        
        <button id="here">view bio</button> 
        </div>
      </div>
     
    )
  }
}

export default Heading
