import React, { useEffect } from "react";
// hooks
import { useTodoLists } from "../../../hooks/useTodoLists";
import { Sample1Memo } from "../../sample/sample1";
import { Sample2 } from "../../sample/sample2";

export const Todo: React.VFC = () => {
  // stateのみを取り出したい場合
  const { todoLists, setTodoLists } = useTodoLists();

  useEffect(() => {
    setTodoLists(["a", "b", "c"]);
  }, []);

  console.log("todoListコンポーネントのレンダリング");

  // recoilのstateを変更

  return (
    <div>
      <div>Recoilのstateを更新</div>
      <Sample1Memo />
      <Sample2 />
    </div>
  );
};
