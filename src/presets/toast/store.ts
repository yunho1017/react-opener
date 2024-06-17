import { createStore } from "../../core/store";
import { generateDefaultState } from "../util";
import { type StoreState } from "../types";

export type Toast = {
  icon?: ToastIconType;
  delay?: number;
  message: React.ReactNode;
};

export type ToastIconType =
  | "error"
  | "success"
  | "info"
  | "warning"
  | React.ReactNode;

export interface Options {
  delay?: number; // default: 1000
}
export const createToastStore = (options: Options = {}) => {
  const { delay = 1000 } = options;
  const store = createStore<
    StoreState<Toast, Toast | string> & { delay: number }
  >((set) => {
    const defaultState = generateDefaultState<Toast, Toast | string>(set);
    return {
      ...defaultState,
      open: (item) => {
        return defaultState.open(
          typeof item === "string" ? { message: item } : item
        );
      },
      delay,
    };
  });

  return {
    ...store,
    custom: (item: Toast | string) => {
      store.getState().open(item);
    },
    success: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      store.getState().open({ ..._item, icon: "success" });
    },
    error: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      store.getState().open({ ..._item, icon: "error" });
    },
    info: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      store.getState().open({ ..._item, icon: "info" });
    },
    warn: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      store.getState().open({ ..._item, icon: "warning" });
    },
  };
};
