import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import TaskHandlerContext from "../context/TaskContext";

import "./App.css";
import LoginPage from "./LoginPage.jsx";
import TaskListPage from "./TaskListPage.jsx";
import TaskPage from "./TaskPage.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <TaskHandlerContext>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/tasks" component={TaskListPage}></Route>
          <Route path="/task/:id" component={TaskPage}></Route>
        </TaskHandlerContext>
      </Switch>
    </Router>
  );
};

export default App;
