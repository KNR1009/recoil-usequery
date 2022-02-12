import React, { useEffect } from "react";
// hooks
import { useTaskLists } from "../../../hooks/useTodoLists";
// types
import { Task } from "../../../interfaces/Task";
// import { Sample1Memo } from "../../sample/sample1";
// import { Sample2Memo } from "../../sample/sample2";

type TodoProps = {
  tasks: Task[];
};

export const Todo: React.VFC<TodoProps> = ({ tasks }) => {
  console.log(tasks);
  // recoilからのデータ取得
  const { TasksLists, setTasksLists } = useTaskLists();

  useEffect(() => {
    console.log("recoilデータを更新");
    setTasksLists(tasks);
  }, []);

  console.log("todoListコンポーネントのレンダリング");

  // recoilのstateを変更

  return (
    <div>
      <div>Recoilのstateを更新</div>
      {/* <Sample1Memo />
      <Sample2Memo /> */}
    </div>
  );
};
