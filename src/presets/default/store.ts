import { createStore } from "../../core/store";
import { StoreState } from "../../core/types";
import { generateDefaultState } from "../../util";

export const createOpenerStore = <ItemState>() => {
  const store = createStore<StoreState<ItemState>>(generateDefaultState);

  return {
    ...store,
    open: ((item) => {
      return store.getState().open(item);
    }) as StoreState<ItemState>["open"],
  };
};
