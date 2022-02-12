import React, { useEffect } from "react";
// hooks
import { useTaskLists } from "../../../hooks/useTodoLists";
// types
import { Task } from "../../../interfaces/Task";
// import { Sample1Memo } from "../../sample/sample1";
// import { Sample2Memo } from "../../sample/sample2";

// styled
import styled from "styled-components";
import { useMutateTask } from "../../../hooks/useMutateTask";

type TodoProps = {
  tasks: Task[];
};

export const Todo: React.VFC<TodoProps> = ({ tasks }) => {
  // recoilからのデータ取得
  const { TasksLists, setTasksLists } = useTaskLists();
  const { deleteTaskMutation } = useMutateTask();

  useEffect(() => {
    console.log("recoilデータを更新");
    setTasksLists(tasks);
    // キャッシュデータ(tasks)によってレンダリング
  }, [tasks]);

  console.log("todoListコンポーネントのレンダリング");

  // 今現在はuseQueryの値を直接代入している
  return (
    <div>
      <div>Recoilのstateを更新</div>
      {TasksLists.map((task, index) => (
        <Task key={index}>
          <p>タスク名: {task.title} </p>
          <p
            className="task-delete"
            onClick={() => {
              deleteTaskMutation.mutate(task.id);
            }}
          >
            削除
          </p>
        </Task>
      ))}
      {/* <Sample1Memo />
      <Sample2Memo /> */}
    </div>
  );
};

const Task = styled.div`
  display: flex;
  align-items: center;

  .task-delete {
    background-color: red;
    color: #ffffff;
    padding: 5px;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
