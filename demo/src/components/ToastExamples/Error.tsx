import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";

export const ErrorExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.error("Oops! Something went wrong. Please try again.");
  }, []);

  return (
    <>
      <Code
        code={`
  const ToastStore = ReactToastOpener.createStore();
  
  ToastStore.error("Oops! Something went wrong. Please try again.");`}
      />
      {opener}
    </>
  );
};
