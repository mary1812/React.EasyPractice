import { Component } from 'react';
import './clicker.css'
class Clicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClick: 0
    };
  }

  amountClicker = () => {
    const { isClick } = this.state;

    this.setState({
      isClick: isClick +1
    });
  }

  render() {
    const { isClick } = this.state;

    const button = <button className = "btn" onClick= {this.amountClicker}> ЖМЯКАЛКА </button>
    return <div>
      <p className = "clickerText">
       Вы нажали {isClick} раз
      </p>
      {isClick < 5 ? button : false}
     
    </div>
  }
}

export default Clicker;