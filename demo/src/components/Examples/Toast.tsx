import { useEffect } from "react";
import { ReactOpener } from "react-opener";
import { Toast } from "@chakra-ui/react";
import { StyledCode } from ".";

export const ToastExample = () => {
  const [api, opener] = ReactOpener.useOpener();
  useEffect(() => {
    const { id } = api.open(() => (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: 16,
          maxWidth: 400,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <Toast description={"Success: Request processed!"} duration={1000} />
      </div>
    ));
    setTimeout(() => {
      api.close(id);
    }, 1000);
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const Store = ReactOpener.createStore();
  
  const { id } = Store.open(<YourToast message="Success: Request processed!"/>);
  setTimeout(() => {
    Store.close(id);
  }, 1000);
  `}
      />
      {opener}
    </>
  );
};
