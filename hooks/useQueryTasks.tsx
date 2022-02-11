import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// types
import { Task } from "../interfaces/Task";

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/tasks");
    return data;
  };

  return useQuery<Task[] | Error>({
    queryKey: "tasks",
    queryFn: getTasks,
    staleTime: 0,
    refetchOnWindowFocus: true,
  });
};
