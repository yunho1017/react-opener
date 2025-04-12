import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import styled from "@emotion/styled";
import { StyledCode } from "../Examples";

const ToastStore = ReactToastOpener.createStore();
const StyledOpener = styled(ReactToastOpener)`
  .ro-toast-bar {
    border: 1px solid #de8d00;
  }

  .ro-toast-icon {
    color: #de8d00;
  }

  .ro-toast-message {
    color: #de8d00;
  }
`;

export const CustomStyleExample = () => {
  useEffect(() => {
    ToastStore.getState().unmountAll();
    ToastStore.success("Success: Request processed!");
  }, []);

  return (
    <>
      <StyledCode
        code={`
  const ToastStore = ReactToastOpener.createStore();
  const StyledOpener = styled(ReactToastOpener)\`
    .ro-toast-bar {
      border: 1px solid #713200;
    }
        
    .ro-toast-icon {
      color: #713200;
    }
        
    .ro-toast-message {
      color: #713200;
    }
  \`;

  ToastStore.success("Success: Request processed!");
`}
      />
      <StyledOpener store={ToastStore} />
    </>
  );
};
