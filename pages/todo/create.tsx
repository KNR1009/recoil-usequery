import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
// components
import { CreateTodo } from "../../components/pages/todo/create";

const CreateTodoPage: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <CreateTodo></CreateTodo>
      <div onClick={() => router.push("/todo")}>戻る</div>
    </div>
  );
};

export default CreateTodoPage;
