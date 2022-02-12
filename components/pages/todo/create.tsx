import React, { useState } from "react";
import { postTask } from "../../../interfaces/Task";
import styled from "styled-components";

// 新規作成用のコンポーネント
export const CreateTodo = () => {
  //追加用タスクの初期値
  const initialTask: postTask = {
    title: "",
    tag: 1,
    tag_name: "",
  };
  const [task, setTask] = useState<postTask>(initialTask);
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

  const onClick = () => {
    console.log(task);
  };

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
      <div className="button" onClick={onClick}>
        新規作成
      </div>
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
