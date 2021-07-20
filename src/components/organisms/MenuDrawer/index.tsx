import { Drawer, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  FormatListBulleted as TodosIcon,
  ShoppingCart as ShowcaseIcon
} from "@material-ui/icons";

import DrawerListItem from "./DrawerListItem";
import { IProps, ListMap } from "./types";
import classes from "./classes.module.css";

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
    title: "Forms",
    icon: <InfoIcon />,
    to: "/forms"
  },
  {
    title: "Showcase",
    icon: <ShowcaseIcon />,
    to: "/showcase"
  }
];

const MenuDrawer: React.FunctionComponent<IProps> = ({ open, onClick }) => {
  return (
    <Drawer
      classes={{ paper: classes.DrawerPaper }}
      anchor="left"
      open={open}
      onClose={onClick}
    >
      <List onClick={onClick}>
        {listMaps.map((list) => (
          <DrawerListItem list={list} key={list.to} />
        ))}
      </List>
    </Drawer>
  );
};

export default MenuDrawer;
