import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "components/pages/Home";
import About from "components/pages/About";
import Todos from "components/pages/Todos";
import Forms from "components/pages/Forms";
import Showcase from "components/pages/Showcase";

const App: React.FunctionComponent = () => {
  return (
    <Router basename="/react-app-playground">
      <Switch>
        <Route strict={true} exact={true} path="/about">
          <About />
        </Route>
        <Route strict={true} exact={true} path="/todos">
          <Todos />
        </Route>
        <Route strict={true} exact={true} path="/forms">
          <Forms />
        </Route>
        <Route strict={true} exact={true} path="/showcase">
          <Showcase />
        </Route>
        <Route strict={true} exact={true} path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
