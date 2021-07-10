import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Showcase from "components/pages/Showcase";

const App: React.FunctionComponent = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/todos">Todos</Link>
            </li>
            <li>
              <Link to="/showcase">Showcase</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todos">
            <Todos />
          </Route>
          <Route path="/showcase">
            <Showcase />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const About: React.FunctionComponent = () => <h2>About</h2>;
const Todos: React.FunctionComponent = () => <h2>Todos</h2>;
const Home: React.FunctionComponent = () => <h2>Home</h2>;

export default App;
