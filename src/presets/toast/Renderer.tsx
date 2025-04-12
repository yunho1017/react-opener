import React, { useEffect } from "react";
import { useSyncExternalStore } from "use-sync-external-store";
import { css } from "goober";

import type { Options, ToastPositionType, createToastStore } from "./store";

const getStyle = (position: ToastPositionType) =>
  css({
    position: "fixed",
    left: 0,
    right: 0,
    ...(position.includes("top") ? { top: 0 } : { bottom: 0 }),
    zIndex: 9999,
    padding: `${16}px`,
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: position.includes("center")
      ? "center"
      : position.includes("left")
      ? "flex-start"
      : "flex-end",
    gap: `${16}px`,
  });

export const ReactToastOpener = ({
  store,
  style,
  className,
  options,
}: {
  store: ReturnType<typeof createToastStore>;
  style?: React.CSSProperties;
  className?: string;
  options?: Options;
}) => {
  const {
    items,
    close,
    unmount,
    unmountAll,
    position: _position,
  } = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getInitialState
  );

  const position = options?.position ?? _position;

  useEffect(() => {
    return () => {
      unmountAll();
    };
  }, []);

  return (
    <div style={style} className={`${getStyle(position)} ${className ?? ""}`}>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          {typeof item.element === "function"
            ? item.element({
                ...item,
                close: () => close(item.id),
                unmount: () => unmount(item.id),
              })
            : item.element}
        </React.Fragment>
      ))}
    </div>
  );
};
