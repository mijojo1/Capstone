import React from "react";
import "./App.css";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Signup' component={Signup}/>
        <Route path='/Signin' component={Signin}/>

      </Switch>
    </BrowserRouter>
  </div>;
}

export default App;
