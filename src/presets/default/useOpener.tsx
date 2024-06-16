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
      close: ref.current.getState().close,
      closeAll: ref.current.getState().closeAll,
    },
    <ReactOpener store={ref.current} />,
  ] as const;
}
