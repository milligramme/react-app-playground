import { useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  FormatListBulleted as TodosIcon,
  ShoppingCart as ShowcaseIcon
} from "@material-ui/icons";

import Showcase from "components/pages/Showcase";
import classes from "./classes.module.css";

const App: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((openDrawer) => !openDrawer);
  }, []);

  return (
    <Router>
      <Container classes={{ root: classes.Container }}>
        <AppBar>
          <Toolbar>
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={openDrawer}
              onClose={handleDrawerToggle}
            >
              <List onClick={handleDrawerToggle}>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link to="/">Home</Link>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link to="/about">About</Link>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <TodosIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link to="/todos">Todos</Link>
                  </ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ShowcaseIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link to="/showcase">Showcase</Link>
                  </ListItemText>
                </ListItem>
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>
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
      </Container>
    </Router>
  );
};

const About: React.FunctionComponent = () => <h2>About</h2>;
const Todos: React.FunctionComponent = () => <h2>Todos</h2>;
const Home: React.FunctionComponent = () => <h2>Home</h2>;

export default App;
