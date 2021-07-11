import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";

import {
  Box,
  Typography,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper
} from "@material-ui/core";
import { AddCircle as AddIcon } from "@material-ui/icons";

import MainTmpl from "components/templates/MainTmpl";
import { GlobalState } from "state/Store/ducks";
import { TodosState } from "state/Store/ducks/Todos";
import { addTodo, toggleTodo } from "state/Store/ducks/Todos/actions";
import TodoItem from "./TodoItem";

const Todos: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector<GlobalState, TodosState>(
    (state) => state.todos
  );

  const handleTodoCreate = useCallback(() => {
    const id = v4();
    dispatch(addTodo(id));
  }, [dispatch]);

  const handleTodoCompleted = useCallback(
    (id: string) => dispatch(toggleTodo(id, true)),
    [dispatch]
  );

  return (
    <MainTmpl>
      <Box>
        <Typography variant="h6">Todos</Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="head">id</TableCell>
                <TableCell variant="head">title</TableCell>
                <TableCell variant="head">description</TableCell>
                <TableCell variant="head">done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos
                .filter((t) => !t.completed)
                .map((t) => (
                  <TodoItem id={t.id} toggle={handleTodoCompleted} key={t.id} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button
          startIcon={<AddIcon />}
          onClick={handleTodoCreate}
          variant="contained"
        >
          add
        </Button>
      </Box>
    </MainTmpl>
  );
};

export default Todos;
