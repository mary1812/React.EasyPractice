import React from "react";
import { Component } from "react";
import Clicker from "./components/Clicker";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
    };
  }

clickerPlusStep = () =>{
  this.setState({
    step: this.state.step +1
  })
}
  
clickerMinusStep = () =>{
  this.setState({
    step: this.state.step -1
  })
}
  
 

  render() {
    const { step } = this.state;
    
    return <div>
      <Clicker step={ step}/>
      <button className="minBtn" onClick={this.clickerMinusStep}> - шаг</button>
      
      <button className="plusBtn" onClick={this.clickerPlusStep}> + шаг</button>
      <p>Значение изменится на: {this.state.step } </p>
    </div>
  }
}

export default App;
