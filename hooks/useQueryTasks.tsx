import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

// types
import { Task } from "../interfaces/Task";

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get("http://127.0.0.1:3000/tasks");
    console.log("APIコール中");
    return data;
  };

  return useQuery<Task[]>({
    queryKey: "tasks",
    queryFn: getTasks,
    // 30秒間はAPIコールをしない
    staleTime: 30000,
    refetchOnWindowFocus: true,
  });
};
