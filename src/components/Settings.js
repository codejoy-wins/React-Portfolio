import React, { Component } from 'react'

export class Settings extends Component {

    constructor(props){
        super(props);
        this.initialState = {
            display: {
                "color": "pink",
                "background": "gold",
            }
        }
        this.state = this.initialState;
    }

    onSubmit = e=>{
        e.preventDefault();
        console.log("on submit function");
        // console log form data
        this.props.magic(e);
    }

    tracer = e =>{
        console.log("tracing in settings");
        const { name, value } = e.target;
        const newdisply = {
            [name]: value
        }
        console.log(`newd = ${newdisply}`);
        this.setState({
            display: newdisply,
        })

    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            Color<input name="color" onChange={()=>this.tracer}></input>
            Background<input name="background"></input>
            <button type="submit">obey</button>
        </form>
      </div>
    )
  }
}

export default Settings
