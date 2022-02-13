import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

// components
import { Update } from "../../components/pages/todo/update";
// import { useQueryTask } from "../../hooks/useQueryTask";
import { useQueryTasks } from "../../hooks/useQueryTasks";

// hooks

type Props = {};

const TodoDetailPage: NextPage<Props> = () => {
  // ページ遷移
  const router = useRouter();
  const id = Number(router.query.id);
  const { status, data } = useQueryTasks();

  const task = data?.filter((i) => i.id === id);

  if (!task) {
    return <p>ローディング中</p>;
  }

  console.log(task);

  return (
    <div>
      <Update></Update>
      <div onClick={() => router.push("/todo")}>戻る</div>{" "}
    </div>
  );
};

export default TodoDetailPage;
