import React from "react";

import { createOpenerStore } from "./store";

export const ReactOpener = ({
  store,
}: {
  store: ReturnType<typeof createOpenerStore>;
}) => {
  const { items, remove } = store.useStore((state) => ({
    items: state.items,
    remove: state.close,
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
