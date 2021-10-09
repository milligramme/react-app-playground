import {
  TableRow,
  TableCell,
  OutlinedInput,
  IconButton,
} from "@mui/material";
import { Done as DoneIcon } from "@mui/icons-material";

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
