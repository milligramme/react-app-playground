import { useState, useCallback } from "react";

import Canvas from "components/atoms/Canvas";
import sketch from "static/sketches/b";

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";

import MenuDrawer from "components/organisms/MenuDrawer";

const CustomAppBar: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((openDrawer) => !openDrawer);
  }, []);

  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Canvas sketch={sketch} />
        <MenuDrawer open={openDrawer} onClick={handleDrawerToggle} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
