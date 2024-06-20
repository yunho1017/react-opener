# ReactToastOpener

## Usage

```javascript
import { ReactOpener } from "react-opener";

const DialogStore = ReactOpener.createStore();

const Container = () => {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          DialogStore.open({
            element: ({ close }) => <YourDialog open={true} onClose={close} />,
          });
        }}
      >
        dialog
      </button>
      <ReactOpener store={DialogStore} />
    </div>
  );
};
```

## API

### createStore

#### Store

| Field    | Description       |
| -------- | ----------------- |
| getState | get current state |
| setState | set current state |
| open     | open item         |
| close    | close item        |
| closeAll | close all items   |

### ReactOpener

#### Props

| Field | Description        | Required |
| ----- | ------------------ | -------- |
| store | store want to open | true     |
