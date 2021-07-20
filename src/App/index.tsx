import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "components/pages/Home";
import About from "components/pages/About";
import Todos from "components/pages/Todos";
import Forms from "components/pages/Forms";
import Showcase from "components/pages/Showcase";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/forms">
          <Forms />
        </Route>
        <Route path="/showcase">
          <Showcase />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
