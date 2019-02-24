import React, { Component } from 'react'

export class Form extends Component {

    constructor(props){
        super(props);
        this.initialState = {
            "name": "",
            "lynk": "",
            "desc": "",
        }
        this.state = this.initialState;
    }

   // set the local state and then pass that up later I guess.

    // tracker
    formTracker = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
        this.props.tracker(value);
    }

    onSub = e => {
      console.log("prevented default");
      e.preventDefault();
    }

  render() {

    // attach tracker function to the onchange of input

    const charm = {
        "background":"royalblue",
        "opacity":".4",
    }
    return (
      <div>
        <form onSubmit={this.onSub}>
            <label>Search </label><input style = {charm}  name="name" onChange={this.formTracker} value={this.state.name} ></input>
        </form>
      </div>
    )
  }
}

export default Form
