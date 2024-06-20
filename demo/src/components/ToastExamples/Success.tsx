import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { StyledCode } from "../Examples";

export const SuccessExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.success("Success: Request processed!");
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const ToastStore = ReactToastOpener.createStore();
  
  ToastStore.success("Success: Request processed!");
`}
      />
      {opener}
    </>
  );
};
