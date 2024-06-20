import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { StyledCode } from "../Examples";

export const ErrorExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.error("Oops! Something went wrong. Please try again.");
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const ToastStore = ReactToastOpener.createStore();
  
  ToastStore.error("Oops! Something went wrong. Please try again.");`}
      />
      {opener}
    </>
  );
};
