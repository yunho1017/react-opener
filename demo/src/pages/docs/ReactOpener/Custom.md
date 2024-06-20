# Custom

## Custom Opener

you can use CustomOpener

#### Example

```jsx
import { ReactOpener } from "react-opener";

const Store = ReactOpener.createStore();

export const CustomOpener = () => {
  const { items, close } = useSyncExternalStore(
    Store.subscribe,
    Store.getState,
    Store.getInitialState
  );

  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {typeof item.element === "function"
            ? item.element({
                id: item.id,
                close: () => close(item.id),
              })
            : item.element}
        </React.Fragment>
      ))}
    </>
  );
};
```
