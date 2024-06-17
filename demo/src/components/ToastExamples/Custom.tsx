import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";

export const CustomExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.custom({ icon: "✅", message: "Success: Request processed!" });
  }, []);

  return (
    <>
      <Code
        code={`
  const ToastStore = ReactToastOpener.createStore();

  ToastStore.custom({ icon: "✅", message: "Success: Request processed!" });
`}
      />
      {opener}
    </>
  );
};
