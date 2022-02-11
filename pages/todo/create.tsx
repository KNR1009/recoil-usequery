import { NextPage } from "next";
import React from "react";
// components
import { CreateTodo } from "../../components/pages/todo/create";

const CreateTodoPage: NextPage = () => {
  return (
    <div>
      <CreateTodo></CreateTodo>
    </div>
  );
};

export default CreateTodoPage;
