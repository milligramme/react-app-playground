import { useState, useCallback } from "react";
import { Link } from "react-router-dom";

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

import classes from "./classes.module.css";
import { IProps } from "./types";

const MainTmpl: React.FunctionComponent<IProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((openDrawer) => !openDrawer);
  }, []);

  return (
    <Container classes={{ root: classes.Container }}>
      <AppBar>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={openDrawer} onClose={handleDrawerToggle}>
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
                  <TodosIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/todos">Todos</Link>
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
      {children}
    </Container>
  );
};

export default MainTmpl;
