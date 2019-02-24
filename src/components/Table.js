import React, { Component } from 'react'

export class Table extends Component {
    
  render() {

    const { info } = this.props;
    const tbod = info.map((thing,spot)=>
    <tr>
    <td><a href={thing.lynk}>{thing.name}</a> </td>
    <td>{thing.desc}</td>
    </tr>
    );
    const thead = 
    <tr>
    <th>name</th>
    <th>description</th>
    </tr>;
    const myStyle = {
        "textAlign":"left",
        "padding":"2rem",
    }
    return (
      <div style={myStyle}>
        <h2>Recent React Projects</h2>
        <table>{thead}{tbod}</table>
      </div>
    )
  }
}

export default Table
