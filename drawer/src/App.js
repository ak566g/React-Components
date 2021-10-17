import React from "react";
import Sidebar from "./components/Sidebar";
import { makeStyles } from "@mui/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Route, Switch } from "react-router-dom";

const useStyles = makeStyles({
  container: {
    display : "flex",
  }
})

function App() {
  const classes = useStyles()
  return (
    <div className = {classes.container}>
        <Sidebar/>
          <Switch>
            <Route exact from="/" render={props => <Home {...props} />} />
            <Route exact path="/contact" render={props => <Contact {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
          </Switch>
  
    </div>
  );
}

export default App;
