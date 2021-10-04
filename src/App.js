import React from "react";
import { Component } from "react";
import styles from "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HelloUserCard from "./components/HelloUserCard";
import {UserContext} from "./contexts"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        fullName: 'User Userovich',
        userImg: 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg'
      }
    }
  }
  
  render() {
    return (
      <BrowserRouter>
              <Link className = "links" to="/home">to home</Link>
            
              <Link className = "links" to="/about">to about</Link>
          
              <Link className = "links" to="/contacts">to contacts</Link>

        <Switch>
          <Route exact path="/" component={MainPage}/>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="*" component ={NotFound} />
        </Switch>

        <UserContext.Provider value={this.state.user}>
          <HelloUserCard />
      </UserContext.Provider>
      </BrowserRouter>
    );
  }
}
// const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;
const NotFound = () => <div>404 ERROR</div>
export default App;
