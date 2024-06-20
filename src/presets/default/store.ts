import { isValidElement } from "react";
import { createStore } from "../../core/store";
import { type StoreState } from "../types";
import { generateDefaultState } from "../util";

type Item = {
  element:
    | React.ReactElement
    | ((params: { id: string; close(): void }) => React.ReactElement);
};

export const createOpenerStore = () => {
  const store = createStore<StoreState<Item, Item | Item["element"]>>((set) => {
    const defaultState = generateDefaultState<Item, Item | Item["element"]>(
      set
    );
    return {
      ...defaultState,
      open: (item) => {
        return defaultState.open(
          isValidElement(item) || typeof item === "function"
            ? ({ element: item } as Item)
            : item
        );
      },
    };
  });

  return {
    ...store,

    open: store.getState().open,
    close: store.getState().close,
    closeAll: store.getState().closeAll,
  };
};
