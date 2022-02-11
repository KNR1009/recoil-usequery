import { atom } from "recoil";
export const todoListsState = atom<string[]>({
  key: "todoLists",
  default: [],
});
