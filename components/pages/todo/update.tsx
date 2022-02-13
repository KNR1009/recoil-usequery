import React, { useState } from "react";
import { Task } from "../../../interfaces/Task";

type UpdateProps = {
  todo: Task[];
};

export const Update: React.VFC<UpdateProps> = ({ todo }) => {
  const [task, setTask] = useState<Task>(todo[0]);
  console.log(task);
  return (
    <div>
      <p></p>
    </div>
  );
};
