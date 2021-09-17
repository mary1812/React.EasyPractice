import { Component } from 'react';

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

    return <div>
      <p>
       Вы нажали {isClick} раз
      </p>
      <button onClick= {this.amountClicker}> this is clicker </button>
     
    </div>
  }
}

export default Clicker;