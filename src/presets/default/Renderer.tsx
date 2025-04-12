import { Fragment, useEffect } from "react";
import { useSyncExternalStore } from "use-sync-external-store";

import { createOpenerStore } from "./store";

export const ReactOpener = ({
  store,
}: {
  store: ReturnType<typeof createOpenerStore>;
}) => {
  const { items, close, unmount, unmountAll } = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getInitialState
  );

  useEffect(() => {
    return () => {
      unmountAll();
    };
  }, []);

  return (
    <>
      {items.map((item) => (
        <Fragment key={item.id}>
          {typeof item.element === "function"
            ? item.element({
                ...item,
                close: () => close(item.id),
                unmount: () => unmount(item.id),
              })
            : item.element}
        </Fragment>
      ))}
    </>
  );
};
