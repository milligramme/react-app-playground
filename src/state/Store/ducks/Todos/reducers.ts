import { Action, Reducer } from "redux";

import { TodosState } from ".";
import { todosActionTypes, TodosAction, ADD_TODO, TOGGLE_TODO } from "./types";

const isActionType = (action: Action): action is TodosAction =>
  todosActionTypes.some((actionType) => actionType === action.type);

export const createTodosReducer =
  (initialState: TodosState): Reducer<TodosState, Action> =>
  (state = initialState, action) => {
    if (!isActionType(action)) return state;

    switch (action.type) {
      case ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              title: "",
              description: "",
              id: action.payload.id,
              completed: false
            }
          ]
        };
      case TOGGLE_TODO: {
        const index = state.todos.findIndex(
          (todo) => todo.id === action.payload.id
        );
        return index === -1
          ? state
          : {
              ...state,
              todos: [
                ...state.todos.slice(0, index),
                {
                  ...state.todos[index],
                  completed: !state.todos[index].completed
                },
                ...state.todos.slice(index + 1)
              ]
            };
      }
    }
  };
