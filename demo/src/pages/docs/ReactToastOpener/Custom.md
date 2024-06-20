# Custom

## Custom Style

you can override style with className

#### styled-component | emotion

```jsx
import { ReactToastOpener } from "react-opener";
import styled from "@emotion/styled";

const ToastStore = ReactToastOpener.createStore();
const CustomOpener = styled(ReactToastOpener)`
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
```

| className        | Description        |
| ---------------- | ------------------ |
| ro-toast-bar     | ToastBar Wrapper   |
| ro-toast-icon    | ToastBar Left Icon |
| ro-toast-message | ToastBar Message   |

## Custom Opener

you can use CustomOpener

#### Example

```jsx
import { ReactToastOpener } from "react-opener";

const ToastStore = ReactToastOpener.createStore();

export const CustomOpener = () => {
  const { items, close, delay, position } = useSyncExternalStore(
    ToastStore.subscribe,
    ToastStore.getState,
    ToastStore.getInitialState
  );

  return (
    <>
      {items.map((item) => (
        <YourToast key={item.id} item={item} />
      ))}
    </>
  );
};
```
