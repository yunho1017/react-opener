import { useRef } from "react";
import { createOpenerStore } from "./store";
import { ReactOpener } from "./Renderer";

export function useOpener() {
  const ref = useRef<ReturnType<typeof createOpenerStore>>();

  if (!ref.current) {
    ref.current = createOpenerStore();
  }
  return [
    {
      open: ref.current.getState().open,
      openAsync: ref.current.getState().openAsync,
      close: ref.current.getState().close,
      closeAll: ref.current.getState().closeAll,
      unmount: ref.current.getState().unmount,
      unmountAll: ref.current.getState().unmountAll,
    },
    <ReactOpener store={ref.current} />,
  ] as const;
}
