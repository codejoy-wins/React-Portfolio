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
      <div onClick={this.boogieTime}>
        Click here to learn more about me
      </div>
    )
  }
}

export default Heading
