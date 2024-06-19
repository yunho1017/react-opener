import { memo, useEffect, useState } from "react";
import { styled, keyframes } from "goober";

import { ToastIcon } from "./ToastIcon";
import type { Toast, ToastPositionType } from "../store";

const enterAnimation = (factor: number) => keyframes`
  0% {
    transform: translate3d(0,${factor * -150}px,0) scale(.8);
    opacity:.5;
  }
  100% {
    transform: translate3d(0,0,0) scale(1);
    opacity:1;
  }
`;

const exitAnimation = (factor: number) => keyframes` 
  0% {
    transform: translate3d(0,0,-1px) scale(1); 
    opacity:1;
  }
  100% {
    transform: translate3d(0,${factor * -100}px,-1px) scale(.8); 
    opacity:0;
  }
`;

const Component = styled("div")`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 400px;
  pointer-events: auto;
  padding: 8px;
  border-radius: 8px;
`;

const Message = styled("div")`
  display: flex;
  justify-content: center;
  color: inherit;
  flex: 1;
  white-space: pre-line;
`;

const getAnimationStyle = (
  position: ToastPositionType,
  visible: boolean
): React.CSSProperties => {
  const factor = position.includes("top") ? 1 : -1;

  return {
    animation: visible
      ? `${enterAnimation(factor)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
      : `${exitAnimation(factor)} 0.6s forwards cubic-bezier(.06,.71,.55,1)`,
  };
};

export const ToastBar: React.FC<{
  toast: Toast & { id: string };
  delay: number;
  position: ToastPositionType;
  close: (id: string) => void;
}> = memo(({ toast, position, delay, close }) => {
  const [visible, setVisible] = useState(true);
  const animationStyle: React.CSSProperties = getAnimationStyle(
    position,
    visible
  );

  const icon = toast.icon && (
    <ToastIcon className="ro-toast-icon" icon={toast.icon} />
  );
  const message = (
    <Message className="ro-toast-message">{toast.message}</Message>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Component
      className="ro-toast-bar"
      style={animationStyle}
      onAnimationEnd={() => {
        if (!visible) {
          close(toast.id);
        }
      }}
    >
      {icon}
      {message}
    </Component>
  );
});
