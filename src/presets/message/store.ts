import { createStore } from "../../core/store";
import { type StoreState } from "../types";
import { generateDefaultState } from "../util";

type Item = {
  message: string;
};

interface Options {
  delay?: number; // default: 500
}
export const createMessageStore = (options: Options = {}) => {
  const { delay = 500 } = options;
  return createStore<StoreState<Item, Item | string>>((set) => {
    const defaultState = generateDefaultState<Item, Item | string>(set);
    return {
      ...defaultState,
      open: (item) => {
        const { id, close } = defaultState.open(
          typeof item === "string" ? { message: item } : item
        );
        setTimeout(() => {
          close();
        }, delay);
        return {
          close,
          id,
        };
      },
    };
  });
};
