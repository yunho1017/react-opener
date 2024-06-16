import { useSyncExternalStore } from "react";
import { css } from "goober";

import { ToastBar } from "./components/ToastBar";

import { createToastStore } from "./store";

const OpenerClassName = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  padding: 16px;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ReactToastOpener = ({
  store,
  style,
  className,
}: {
  store: ReturnType<typeof createToastStore>;
  style?: React.CSSProperties;
  className?: string;
}) => {
  const { items, close, delay } = useSyncExternalStore(
    store.subscribe,
    store.getState,
    store.getInitialState
  );

  return (
    <div
      style={style}
      className={
        className ? `${OpenerClassName} ${className}` : OpenerClassName
      }
    >
      {items.map((item) => (
        <ToastBar
          key={item.id}
          toast={item}
          close={close}
          delay={item.delay ?? delay}
        />
      ))}
    </div>
  );
};
