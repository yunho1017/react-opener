import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";

import { StyledCode } from "../Examples";

export const InfoExample = () => {
  const [toast, opener] = ReactToastOpener.useToast();
  useEffect(() => {
    toast.info("Info: Password expires in 7 days");
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const ToastStore = ReactToastOpener.createStore();
  
  ToastStore.info("Info: Password expires in 7 days");`}
      />
      {opener}
    </>
  );
};
