## ReactToastOpener.useToast

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
