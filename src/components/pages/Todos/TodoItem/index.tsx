import {
  TableRow,
  TableCell,
  OutlinedInput,
  IconButton
} from "@material-ui/core";
import { Done as DoneIcon } from "@material-ui/icons";

import { IProps } from "./types";
import classes from "./classes.module.css";

const TodoItem: React.FunctionComponent<IProps> = ({ id, toggle }) => {
  const handleClick = () => toggle(id);

  return (
    <TableRow classes={{ root: classes.TableBodyRow }}>
      <TableCell>{id}</TableCell>
      <TableCell>
        <OutlinedInput fullWidth={true} />
      </TableCell>
      <TableCell>
        <OutlinedInput multiline={true} fullWidth={true} />
      </TableCell>
      <TableCell>
        <IconButton onClick={handleClick}>
          <DoneIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default TodoItem;
