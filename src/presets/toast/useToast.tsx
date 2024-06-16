import { useRef } from "react";
import { createToastStore } from "./store";
import { ReactToastOpener } from "./Renderer";

export function useToast() {
  const ref = useRef<ReturnType<typeof createToastStore>>();

  if (!ref.current) {
    ref.current = createToastStore();
  }
  return [
    {
      open: ref.current.getState().open,
      close: ref.current.getState().close,
      closeAll: ref.current.getState().closeAll,
    },
    <ReactToastOpener store={ref.current} />,
  ] as const;
}
