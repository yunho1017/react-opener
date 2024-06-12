import React, { useSyncExternalStore } from "react";

import { createMessageStore } from "./store";

export const ReactMessageOpener = ({
  store,
}: {
  store: ReturnType<typeof createMessageStore>;
}) => {
  const { items, close } = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getInitialState
  );

  return (
    <>
      {items.map((item) => (
        <React.Fragment key={item.id}></React.Fragment>
      ))}
    </>
  );
};
