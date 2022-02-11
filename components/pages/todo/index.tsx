import React, { useEffect } from "react";
// hooks
import { useTodoLists } from "../../../hooks/useTodoLists";

export const Todo: React.VFC = () => {
  // stateのみを取り出したい場合
  const { todoLists, setTodoLists } = useTodoLists();

  useEffect(() => {
    setTodoLists(["a", "b", "c"]);
  }, []);

  return <div>{todoLists}</div>;
};
