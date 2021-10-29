import { BrowserRouter, Switch, Route } from "react-router-dom";
import Topbar from "./components/topbar/TopBar"
import Homepage from "./pages/homepage/Homepage"
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";


function App() {
  const currentUser = true
  return (
    <div>
      <BrowserRouter>
        <Topbar/>
        <Homepage/>
      </BrowserRouter>
    </div>
  );
}

export default App;

{/* <BrowserRouter>
      <Topbar>
        <Switch>
          <Route exact path = "/">
            <Homepage/>
          </Route>
          
          <Route path="/posts">
            <Homepage />
          </Route>
          
          <Route path="/register">
            {currentUser ? <Homepage /> : <Register />}
          </Route>
          
          <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
          
          <Route path="/post/:id">
            <Single />
          </Route>
          
          <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
          
          <Route path="/settings">
            {currentUser ? <Settings /> : <Login />}
          </Route>
          
        </Switch>
      </Topbar>
    </BrowserRouter> */}