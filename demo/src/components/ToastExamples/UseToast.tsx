import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { StyledCode } from "../Examples";

export const UseToastExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.success("Success: Request processed!");
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const [toast, opener] = ReactToastOpener.useToast();
    
  toast.success("Success: Request processed!");`}
      />
      {opener}
    </>
  );
};
