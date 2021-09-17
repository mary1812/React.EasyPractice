import { Component } from 'react';
// import App from '../../App';

class Aloha extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    isGreeting: true
    }
}

  switchState = () => {

    const { isGreeting } = this.state;
    
    this.setState({
      isGreeting: !isGreeting
    });
  }

  render() {
    const { name } = this.props;
    const {isGreeting } = this.state;
    
    return <div>
      <h1>
        {isGreeting ? 'HELLO' : 'BYE'} {name}
      </h1>
      <button onClick = {this.switchState}>Нажми чтобы поменять состояние</button>
    </div>
  }
}

export default Aloha;