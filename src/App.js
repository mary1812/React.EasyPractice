import React from "react";
import { Component } from "react";
import styles from "./App.css"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
              <Link className = "links" to="/home">to home</Link>
            
              <Link className = "links" to="/about">to about</Link>
          
              <Link className = "links" to="/contacts">to contacts</Link>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/Contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Contacts = () => <div>Contacts</div>;

export default App;
