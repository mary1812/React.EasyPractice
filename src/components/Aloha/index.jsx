import { Component } from 'react';
// import App from '../../App';

class Aloha extends Component {
  render() {
    const { name, isGreeting } = this.props;

    // let text;
    // if (isGreeting) {
    //   text = 'hello';
    // }
    // else {
    //   text = 'bye';
    // }

    // const text = isGreeting ? 'HELLO' : 'BYE'; используем переменную один раз, поэтому тернарку пишем сразу в {}
    return <h1>{isGreeting ? 'HELLO' : 'BYE'} {name}</h1>
  }
}

export default Aloha;