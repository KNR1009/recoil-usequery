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

  if (status === "error") {
    return <p>エラーです</p>;
  }

  if (status === "loading") {
    return <p>ローディング中</p>;
  }

  if (data === undefined) {
    return <p>データが取得できていません</p>;
  }

  return (
    <div>
      <Todo tasks={data}></Todo>
      <div onClick={() => router.push("/todo/create")}>新規作成ページへ</div>
    </div>
  );
};

export default TodoPage;
