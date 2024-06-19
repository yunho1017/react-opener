import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";

export const CustomPositionExample = () => {
  const [toast, opener] = ReactToastOpener.useToast({
    position: "bottom-center",
  });
  useEffect(() => {
    toast.success("Success: Request processed!");
  }, []);

  return (
    <>
      <Code
        code={`
  const ToastStore = ReactToastOpener.createStore({ position: "bottom-center" });

  ToastStore.success("Success: Request processed!");
`}
      />
      {opener}
    </>
  );
};
