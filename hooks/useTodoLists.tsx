import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { todoListsState } from "../lib/store";

export const useTodoLists = () => {
  const [todoLists, setTodoLists] = useRecoilState(todoListsState);

  return { todoLists, setTodoLists };
};
