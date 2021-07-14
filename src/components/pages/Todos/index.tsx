import { useCallback, useState } from "react";
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
  Paper,
  TablePagination
} from "@material-ui/core";
import { AddCircle as AddIcon } from "@material-ui/icons";

import MainTmpl from "components/templates/MainTmpl";
import { GlobalState } from "state/Store/ducks";
import { TodosState } from "state/Store/ducks/Todos";
import { addTodo, toggleTodo } from "state/Store/ducks/Todos/actions";
import TodoItem from "./TodoItem";

const Todos: React.FunctionComponent = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const rowsPerPageOptions = [5, 10, 20];
  const dispatch = useDispatch();
  const { todos } = useSelector<GlobalState, TodosState>(
    (state) => state.todos
  );

  const handlePageChange = useCallback(
    (
      _e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
      page: number
    ) => {
      setPage(page);
    },
    []
  );
  const handleRowsPerPageChange = useCallback(
    (
      event:
        | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        | undefined
    ) => {
      if (event === undefined) return;

      setLimit(parseInt(event.target.value, 10));
      setPage(0);
    },
    []
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
        <Typography variant="h6">Todos page {page + 1}</Typography>
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
                .slice(page * limit, (page + 1) * limit)
                .map((t) => (
                  <TodoItem id={t.id} toggle={handleTodoCompleted} key={t.id} />
                ))}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            page={page}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            count={todos.filter((t) => !t.completed).length}
            rowsPerPage={limit}
            rowsPerPageOptions={rowsPerPageOptions}
          />
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
