import React, { Component } from "react";
import { UserContext } from "../../contexts";



class HelloUserCard extends Component {
  render() {
    return (
      <UserContext.Consumer>{(value) =>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
   
          <h1>Hello {value.fullName}</h1>
          <img src={value.userImg} alt="img" style={{width: '100px'}}></img>
      </div>}</UserContext.Consumer>
    );
  }
}

export default HelloUserCard;
