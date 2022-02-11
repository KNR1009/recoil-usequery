import { NextPage } from "next";
import React from "react";
import { Todo } from "../../components/pages/todo";

type Props = {};

const TodoPage: NextPage<Props> = () => {
  return (
    <div>
      <Todo></Todo>
    </div>
  );
};

export default TodoPage;
