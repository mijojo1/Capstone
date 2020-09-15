import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Signin from "./container/Signin";
import Signup from "./container/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { IsUserLoggedIn } from "./actions";

function App() {
  
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(IsUserLoggedIn());
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Signin" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
