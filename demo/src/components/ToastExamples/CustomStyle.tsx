import { useEffect } from "react";
import { ReactToastOpener } from "react-opener";
import { Code } from "../code";
import styled from "@emotion/styled";

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
    ToastStore.getState().closeAll();
    ToastStore.success("Success: Request processed!");
  }, []);

  return (
    <>
      <Code
        code={`
  const ToastStore = ReactToastOpener.createStore({ delay: 100000 });
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
