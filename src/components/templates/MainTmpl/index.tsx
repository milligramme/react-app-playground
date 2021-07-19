import { useState, useCallback } from "react";

import Canvas from "components/atoms/Canvas";
import sketch from "static/sketches/b";

import { Container, AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import classes from "./classes.module.css";
import { IProps } from "./types";
import MenuDrawer from "components/organisms/MenuDrawer";

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
          <Canvas sketch={sketch} />
          <MenuDrawer open={openDrawer} onClick={handleDrawerToggle} />
        </Toolbar>
      </AppBar>
      {children}
    </Container>
  );
};

export default MainTmpl;
