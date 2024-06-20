# ReactToastOpener.useToast

## Usage

```javascript
import { ReactToastOpener } from "react-opener";

const Container = () => {
  const [toast, opener] = ReactToastOpener.useToast();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          toast.success("Success: Request processed!");
        }}
      >
        open
      </button>
      {opener}
    </div>
  );
};
```

## API

#### Options

same as createStore Options

<!-- prettier-ignore -->
| Field | Description  | Type | Default |
| --- | --- | --- | --- |
| delay | When does the toast message disappear | number | 1000 |
| position | Where does the toast message | ToastPositionType | "top-center" |
