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
import { useRouter } from "next/router";

type TodoProps = {
  tasks: Task[];
};

export const Todo: React.VFC<TodoProps> = ({ tasks }) => {
  // recoilからのデータ取得
  const { TasksLists, setTasksLists } = useTaskLists();
  const { deleteTaskMutation } = useMutateTask();
  const router = useRouter();

  useEffect(() => {
    setTasksLists(tasks);
    // キャッシュデータ(tasks)によってレンダリング
  }, [tasks]);

  console.log("todoListコンポーネントのレンダリング");

  // 今現在はuseQueryの値を直接代入している
  return (
    <div>
      <div>Recoilのstateを更新</div>
      {TasksLists.map((task, index) => (
        <TaskContainer key={index}>
          <p>タスク名: {task.title} </p>
          <p
            className="task-delete"
            onClick={() => {
              deleteTaskMutation.mutate(task.id);
            }}
          >
            削除
          </p>
          <p
            className="task-edit"
            onClick={() => router.push(`todo/${task.id}`)}
          >
            編集
          </p>
        </TaskContainer>
      ))}
      {/* <Sample1Memo />
      <Sample2Memo /> */}
    </div>
  );
};

const TaskContainer = styled.div`
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

  .task-edit {
    background-color: #a4c6ff;
    color: #ffffff;
    padding: 5px;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
