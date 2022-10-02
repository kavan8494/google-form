import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import Sheet from "./Sheet";
import Update from "./Update";
import Details from "./Details";
import Signup from "./Signup";
import Home from "./Home";
import Login from "./Login";
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
      <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/signup">
            <Signup/>
          </Route>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route  path="/home">
            <Form/>
          </Route>
          <Route path="/sheets">
            <Sheet/>
          </Route>
          <Route path="/details:id">
            <Details/>
          </Route>
          <Route path="/update:id">
            <Update/>
          </Route>
        </Switch>
      </div>
    </Router>  
  );
}

export default App;
