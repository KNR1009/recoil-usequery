import React, { useState } from "react";
import styled from "styled-components";
import { Task } from "../../../interfaces/Task";

type UpdateProps = {
  todo: Task[];
};

export const Update: React.VFC<UpdateProps> = ({ todo }) => {
  const [task, setTask] = useState<Task>(todo[0]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, mode: string) => {
    switch (mode) {
      case "title":
        setTask({ ...task, title: e.target.value });
        break;
      case "tag_id":
        setTask({ ...task, tag: Number(e.target.value) });
        break;
      case "tag_name":
        setTask({ ...task, tag_name: e.target.value });
    }
  };
  console.log(task);
  return (
    <CreateContainer>
      <div className="input-area">
        <label>タスク名</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => {
            onChange(e, "title");
          }}
        />
      </div>
      <div className="input-area">
        <label>タグ番号</label>
        <input
          type="text"
          onChange={(e) => {
            onChange(e, "tag_id");
          }}
          value={task.tag}
        />
      </div>
      <div className="input-area">
        <label>タグ名</label>
        <input
          type="text"
          value={task.tag_name}
          onChange={(e) => {
            onChange(e, "tag_name");
          }}
        />
      </div>
      <div className="button">更新</div>
    </CreateContainer>
  );
};

const CreateContainer = styled.div`
  .button {
    background-color: #c2eeff;
    color: #000000;
    padding: 5px;
    margin-left: 10px;
    border-radius: 10px;
    cursor: pointer;
    width: 100px;
    margin: 10px 0;
  }
`;
