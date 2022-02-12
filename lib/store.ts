import { atom } from "recoil";
// types
import { Task } from "../interfaces/Task";
export const tasksListsState = atom<Task[]>({
  key: "tasksLists",
  default: [],
});
