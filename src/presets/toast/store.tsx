import { createStore } from "../../core/store";
import { ItemType } from "../../core/types";
import { ToastBar } from "./components/ToastBar";

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

export type ToastPositionType =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface Options {
  delay?: number; // default: 1000
  position?: ToastPositionType;
}
export const createToastStore = (options: Options = {}) => {
  const { delay = 1000, position = "top-center" } = options;
  const store = createStore<
    Toast,
    { position: ToastPositionType; delay: number }
  >((_, state) => {
    return {
      ...state,
      position,
      delay,
    };
  });

  const openToast = (item: Toast | string) => {
    const element: ItemType<Toast>["element"] = ({
      close,
      id,
      isOpen,
      state,
      unmount,
    }) => {
      return (
        <ToastBar
          key={id}
          isOpen={isOpen}
          toast={{ ...state, id }}
          close={close}
          unmount={unmount}
          position={position}
          delay={state.delay ?? delay}
        />
      );
    };
    store
      .getState()
      .open(element, typeof item === "string" ? { message: item } : item);
  };
  return {
    ...store,
    custom: (item: Toast | string) => {
      openToast(item);
    },
    success: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      openToast({ ..._item, icon: "success" });
    },
    error: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      openToast({ ..._item, icon: "error" });
    },
    info: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      openToast({ ..._item, icon: "info" });
    },
    warn: (item: Omit<Toast, "icon"> | string) => {
      const _item = typeof item === "string" ? { message: item } : item;
      openToast({ ..._item, icon: "warning" });
    },
  };
};
