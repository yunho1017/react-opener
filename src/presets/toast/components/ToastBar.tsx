import { memo, useEffect, useState } from "react";
import { styled, keyframes } from "goober";

import { ToastIcon } from "./ToastIcon";
import { Toast } from "../store";

const enterAnimation = () => keyframes`
  0% {
    transform: translate3d(0,-150px,0) scale(.8);
    opacity:.5;
  }
  100% {
    transform: translate3d(0,0,0) scale(1);
    opacity:1;
  }
`;

const exitAnimation = () => keyframes` 
  0% {
    transform: translate3d(0,0,-1px) scale(1); 
    opacity:1;
  }
  100% {
    transform: translate3d(0,-100px,-1px) scale(.8); 
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
  margin: 0 auto;
`;

const Icon = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Message = styled("div")`
  display: flex;
  justify-content: center;
  color: inherit;
  flex: 1;
  white-space: pre-line;
`;

const getAnimationStyle = (visible: boolean): React.CSSProperties => {
  return {
    animation: visible
      ? `${enterAnimation()} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
      : `${exitAnimation()} 0.6s forwards cubic-bezier(.06,.71,.55,1)`,
  };
};

export const ToastBar: React.FC<{
  toast: Toast & { id: string };
  delay: number;
  close: (id: string) => void;
}> = memo(({ toast, delay, close }) => {
  const [visible, setVisible] = useState(true);
  const animationStyle: React.CSSProperties = getAnimationStyle(visible);

  const icon = toast.icon && (
    <Icon className="ro-toast-icon">
      <ToastIcon icon={toast.icon} />
    </Icon>
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
