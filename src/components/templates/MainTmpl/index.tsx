import { useState, useCallback } from "react";

import Canvas from "components/atoms/Canvas";
import sketch from "static/sketches/b";

import {
  Container,
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  List
} from "@material-ui/core";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  FormatListBulleted as TodosIcon,
  ShoppingCart as ShowcaseIcon
} from "@material-ui/icons";

import classes from "./classes.module.css";
import { IProps, ListMap } from "./types";
import DrawerListItem from "./DrawerListItem";

const MainTmpl: React.FunctionComponent<IProps> = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((openDrawer) => !openDrawer);
  }, []);

  const listMaps: ListMap[] = [
    {
      title: "Home",
      icon: <HomeIcon />,
      to: "/"
    },
    {
      title: "Todos",
      icon: <TodosIcon />,
      to: "/todos"
    },
    {
      title: "About",
      icon: <InfoIcon />,
      to: "/about"
    },
    {
      title: "Showcase",
      icon: <ShowcaseIcon />,
      to: "/showcase"
    }
  ];

  return (
    <Container classes={{ root: classes.Container }}>
      <AppBar>
        <Toolbar>
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Canvas sketch={sketch} />
          <Drawer
            classes={{ paper: classes.DrawerPaper }}
            anchor="left"
            open={openDrawer}
            onClose={handleDrawerToggle}
          >
            <List onClick={handleDrawerToggle}>
              {listMaps.map((list) => (
                <DrawerListItem list={list} key={list.to} />
              ))}
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
};

export default MainTmpl;
