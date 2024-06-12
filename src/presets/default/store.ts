import { isValidElement } from "react";
import { createStore } from "../../core/store";
import { type StoreState } from "../types";
import { generateDefaultState } from "../util";

type Item<T = Record<string, any>> = {
  element:
    | React.ReactElement
    | ((params: { state: T; id: string; close(): void }) => React.ReactElement);
  state?: Record<string, any>;
};

export const createOpenerStore = <ItemState>() => {
  const store = createStore<
    StoreState<Item<ItemState>, Item<ItemState> | React.ReactElement>
  >((set) => {
    const defaultState = generateDefaultState<
      Item<ItemState>,
      Item<ItemState> | React.ReactElement
    >(set);
    return {
      ...defaultState,
      open: (item) => {
        return defaultState.open(
          isValidElement(item) ? { element: item } : item
        );
      },
    };
  });

  return {
    ...store,
    open: (item: Item<ItemState> | React.ReactElement) => {
      return store.getState().open(item);
    },
  };
};
