import React, { Component } from 'react'

export class Table extends Component {
    
  render() {

    const { info, magicTerm } = this.props;
    console.log(`magic term from app.js is ${magicTerm}`);
    const tbod = info.map((thing,spot)=>
    <tr key={spot}>
    <td><a href={thing.lynk}>{thing.name}</a> </td>
    <td>{thing.desc}</td>
    <td>{thing.tech}</td>
    </tr>
    );


    const thead = 
    <tr>
    <th>name</th>
    <th>description</th>
    <th>technologies</th>

    </tr>;
    const myStyle = {
        "textAlign":"left",
        "padding":"2rem",
    }
    return (
      <div style={myStyle}>
        <h2>Recent React Projects</h2>
        <table><tbody>{thead}{tbod}</tbody></table>
      </div>
    )
  }
}

export default Table
