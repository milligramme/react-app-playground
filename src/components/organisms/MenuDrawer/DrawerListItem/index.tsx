import { useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import classes from "./classes.module.css";
import { ListMap } from "../types";

interface DrawerListItemProps {
  list: ListMap;
}

const DrawerListItem: React.FunctionComponent<DrawerListItemProps> = ({
  list
}) => {
  const history = useHistory();
  const location = useLocation();

  const handleRoute = useCallback(() => {
    history.push(list.to);
  }, [history, list]);

  const selected = location.pathname === list.to;

  return (
    <ListItem
      button={true}
      key={list.to}
      onClick={handleRoute}
      selected={selected}
    >
      <ListItemIcon classes={{ root: classes.ListItemIcon }}>
        {list.icon}
      </ListItemIcon>
      <ListItemText>{list.title}</ListItemText>
    </ListItem>
  );
};

export default DrawerListItem;
