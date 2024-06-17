import { useRef } from "react";
import { Options, Toast, createToastStore } from "./store";
import { ReactToastOpener } from "./Renderer";

export function useToast(options: Options = {}) {
  const ref = useRef<ReturnType<typeof createToastStore>>();

  if (!ref.current) {
    ref.current = createToastStore(options);
  }
  return [
    {
      close: ref.current.getState().close,
      closeAll: ref.current.getState().closeAll,
      custom: (item: Toast | string) => {
        ref.current?.getState().open(item);
      },
      success: (item: Omit<Toast, "icon"> | string) => {
        const _item = typeof item === "string" ? { message: item } : item;
        ref.current?.getState().open({ ..._item, icon: "success" });
      },
      error: (item: Omit<Toast, "icon"> | string) => {
        const _item = typeof item === "string" ? { message: item } : item;
        ref.current?.getState().open({ ..._item, icon: "error" });
      },
      info: (item: Omit<Toast, "icon"> | string) => {
        const _item = typeof item === "string" ? { message: item } : item;
        ref.current?.getState().open({ ..._item, icon: "info" });
      },
      warn: (item: Omit<Toast, "icon"> | string) => {
        const _item = typeof item === "string" ? { message: item } : item;
        ref.current?.getState().open({ ..._item, icon: "warning" });
      },
    },
    <ReactToastOpener store={ref.current} />,
  ] as const;
}
