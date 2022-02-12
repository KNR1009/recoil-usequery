import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { tasksListsState } from "../lib/store";

export const useTaskLists = () => {
  const [TasksLists, setTasksLists] = useRecoilState(tasksListsState);

  return { TasksLists, setTasksLists };
};
