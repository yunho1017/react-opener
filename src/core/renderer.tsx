import React from "react";
import { createStore } from "./store";
import { StoreState } from "./types";

export const ReactOpener = <T extends StoreState<any>>({
  store,
}: {
  store: ReturnType<typeof createStore<T>>;
}) => {
  const { items, remove } = store.useStore((state) => ({
    items: state.items,
    remove: state.remove,
  }));

  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {typeof item.element === "function"
            ? item.element({
                id: item.id,
                remove: () => remove(item.id),
                state: item.state ?? {},
              })
            : item.element}
        </React.Fragment>
      ))}
    </>
  );
};
