import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  AppBar,
  IconButton,
  Toolbar,
  CircularProgress,
} from "@mui/material";
import { Menu as MenuIcon } from "@material-ui/icons";

import { GlobalState } from "state/Store/ducks";
import { PageStatusState } from "state/Store/ducks/PageStatus";
import Canvas from "components/atoms/Canvas";
import MenuDrawer from "components/organisms/MenuDrawer";
import sketch from "static/sketches/b";

const CustomAppBar: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const handleDrawerToggle = useCallback(() => {
    setOpenDrawer((openDrawer) => !openDrawer);
  }, []);

  const { status } = useSelector<GlobalState, PageStatusState>(
    (state) => state.pageStatus,
  );
  return (
    <AppBar>
      <Toolbar>
        <IconButton onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        {status === "success" ? (
          <Canvas sketch={sketch} />
        ) : (
          <CircularProgress />
        )}
        <MenuDrawer open={openDrawer} onClick={handleDrawerToggle} />
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
