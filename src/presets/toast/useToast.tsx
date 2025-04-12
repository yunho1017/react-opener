import { useRef } from "react";
import { Options, createToastStore } from "./store";
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
      custom: ref.current.custom,
      success: ref.current.success,
      error: ref.current.error,
      info: ref.current.info,
      warn: ref.current.warn,
    },
    <ReactToastOpener store={ref.current} />,
  ] as const;
}
