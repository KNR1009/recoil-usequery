import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { Todo } from "../../components/pages/todo";

// hooks
import { useQueryTasks } from "../../hooks/useQueryTasks";

type Props = {};

const TodoPage: NextPage<Props> = () => {
  // ページ遷移
  const router = useRouter();

  // APIコールを行う
  const { status, data } = useQueryTasks();
  console.log(data);
  return (
    <div>
      <Todo></Todo>
      <div onClick={() => router.push("/todo/create")}>新規作成ページへ</div>
    </div>
  );
};

export default TodoPage;
