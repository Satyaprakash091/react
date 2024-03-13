import React, { Component } from 'react'

export default class App extends Component 
{
  constructor()
  {
    super();
    console.log("constructor called")
    this.state={
      count:0
    }
  }
  componentDidMount()
  {
    console.log("Mounting happened")
  }
  shouldComponentUpdate()
  {
    console.log("should component update called")
    return true;
  }
  componentDidUpdate()
  {
    console.log("component updated")
  }
  getSnapshotBeforeUpdate()
  {
    console.log("getsnapshotupdate called")
  }
  render() {
    return (
      <div>
        <p>Count : {this.state.count}</p>
        <button onClick={()=>this.setState((state)=>
          {
            return{count: state.count+1}
          })}>+</button>
      </div>
    )
  }
}
