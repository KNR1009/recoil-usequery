import axios from "axios";
import { useQueryClient, useMutation } from "react-query";
import { Task } from "../interfaces/Task";

// tasksのサーバーデータ更新用のフック
export const useMutateTask = () => {
  const queryClient = useQueryClient();

  // 削除
  const deleteTaskMutation = useMutation(
    (id: number) => axios.delete(`http://127.0.0.1:3000/tasks/${id}`),
    {
      onSuccess: (res, variables) => {
        // キャッシュを更新する処理
        // 既存のデータをキャッシュから取得する
        const previousTasks = queryClient.getQueryData<Task[]>("tasks");
        console.log(`削除前のデータ${previousTasks}`);
        console.log(variables);
        if (previousTasks) {
          queryClient.setQueryData<Task[]>(
            "tasks",
            previousTasks.filter((task) => task.id !== variables)
          );
        }
      },
    }
  );
  return { deleteTaskMutation };
};
