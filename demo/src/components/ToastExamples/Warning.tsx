import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";

export const WarningExample = () => {
  const [toast, opener] = ReactToastOpener.useToast({ delay: 200000 });
  useEffect(() => {
    toast.warn("Warning: Account locks after 3 failed attempts.");
  }, []);

  return (
    <>
      <Code
        code={`
  const ToastStore = ReactToastOpener.createStore();
          
  ToastStore.warning("Warning: Account locks after 3 failed attempts.");`}
      />
      {opener}
    </>
  );
};
