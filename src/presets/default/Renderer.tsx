import { Fragment } from "react";
import { useSyncExternalStore } from "use-sync-external-store";

import { createOpenerStore } from "./store";

export const ReactOpener = ({
  store,
}: {
  store: ReturnType<typeof createOpenerStore>;
}) => {
  const { items, close } = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getInitialState
  );

  return (
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          {typeof item.element === "function"
            ? item.element({
                id: item.id,
                close: () => close(item.id),
              })
            : item.element}
        </Fragment>
      ))}
    </>
  );
};
