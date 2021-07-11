import { useCallback } from "react";
import { useHistory } from "react-router-dom";

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

  const handleRoute = useCallback(() => {
    history.push(list.to);
  }, [history, list]);

  return (
    <ListItem button={true} key={list.to} onClick={handleRoute}>
      <ListItemIcon classes={{ root: classes.ListItemIcon }}>
        {list.icon}
      </ListItemIcon>
      <ListItemText>{list.title}</ListItemText>
    </ListItem>
  );
};

export default DrawerListItem;
