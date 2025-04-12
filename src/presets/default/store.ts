import { createStore } from "../../core/store";
import { StoreState } from "../../core/types";

export const createOpenerStore = () => {
  const store = createStore<StoreState>();

  return {
    ...store,
    open: store.getState().open,
    close: store.getState().close,
    closeAll: store.getState().closeAll,
    unmount: store.getState().unmount,
    unmountAll: store.getState().unmountAll,
  };
};
