import { createStore } from "../../core/store";
import { StoreState } from "../../core/types";
import { generateDefaultState } from "../../util";

interface Options {
  delay?: number; // default: 500
}
export const createMessageStore = <ItemState extends Record<string, any>>(
  options: Options = {}
) => {
  const { delay = 500 } = options;
  return createStore<StoreState<ItemState>>((set) => {
    const defaultState = generateDefaultState<ItemState>(set);
    return {
      ...defaultState,
      open: (item) => {
        const { id, remove } = defaultState.open(item);
        setTimeout(() => {
          remove();
        }, delay);
        return {
          remove,
          id,
        };
      },
    };
  });
};
