import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./components/stateProvider/StateProvider";
import {auth} from "./firebase";
import Login from "./components/login/Login";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/Checkout";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    
    return () => {
      unsubscribe();
    }
  }, [])

  console.log("USER IS >>>>>", user)
  return(
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout  />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
