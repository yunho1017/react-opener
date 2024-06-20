import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { StyledCode } from "../Examples";

export const CustomExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.custom({ icon: "✅", message: "Success: Request processed!" });
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const ToastStore = ReactToastOpener.createStore();

  ToastStore.custom({ icon: "✅", message: "Success: Request processed!" });
`}
      />
      {opener}
    </>
  );
};
