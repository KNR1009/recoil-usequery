import React, { memo } from "react";
import { useRecoilValue } from "recoil";
// hooks
import { todoListsState } from "../../lib/store";

const Sample1 = () => {
  // const { todoLists } = useTodoLists();
  const todoLists = useRecoilValue(todoListsState);

  console.log("サンプルコンポーネント1");
  return <div>{todoLists}</div>;
};

export const Sample1Memo = memo(Sample1);
