import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";

export const UseToastExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.success("Success: Request processed!");
  }, []);

  return (
    <>
      <Code
        code={`
  const [toast, opener] = ReactToastOpener.useToast();
    
  toast.success("Success: Request processed!");`}
      />
      {opener}
    </>
  );
};
