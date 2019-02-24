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

  render() {

    // attach tracker function to the onchange of input
    return (
      <div>
        <form>
            <label>Search by Name: </label><input name="name" onChange={this.formTracker} ></input>
            <label>Search by Description: </label><input name="desc" onChange={this.formTracker} ></input>
        </form>
      </div>
    )
  }
}

export default Form
