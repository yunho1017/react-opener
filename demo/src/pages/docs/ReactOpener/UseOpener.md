## ReactOpener.useOpener

```javascript
import { ReactOpener } from "react-opener";

const Container = () => {
  const [dialog, opener] = ReactOpener.useOpener();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dialog.open({
            element: ({ close }) => <YourDialog open={true} onClose={close} />,
          });
        }}
      >
        dialog
      </button>
      {opener}
    </div>
  );
};
```
