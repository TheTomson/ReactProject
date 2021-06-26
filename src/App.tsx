import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { fetchUsers } from "./redux/Actions/userActions";
import { LeftMenu } from "./Component/LeftMenu/LeftMenu";
import { TopNav } from "./Component/TopNav/TopNav";
import HomePage from "./Views/HomePage";
import Publications from "./Views/Publications";
import Ecosystem from "./Views/Ecosystem";
import Entities from "./Views/Entities";
import Test from "./Views/Test";
import Profile from "./Views/Profile";
import Workspaces from "./Views/Workspaces";
function App() {
  return (
    <Router>
      <TopNav />
      <LeftMenu />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/publications">
          <Publications />
        </Route>
        <Route path="/ecosystem">
          <Ecosystem />
        </Route>
        <Route path="/entities">
          <Entities />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/workspaces">
          <Workspaces />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
