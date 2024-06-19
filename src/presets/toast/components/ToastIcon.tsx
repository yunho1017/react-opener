import { styled } from "goober";
import { type ToastIconType } from "../store";

const WarningMark = styled("i")`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  color: #faad14;
  border-radius: 40px;

  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    background: currentColor;
    left: 7px;
  }
  &::after {
    top: 2px;
    height: 8px;
  }
  &::before {
    height: 2px;
    bottom: 2px;
  }
`;

const InfoMark = styled("i")`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid currentColor;
  color: #1677ff;
  border-radius: 40px;

  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    background: currentColor;
    left: 7px;
  }
  &::after {
    bottom: 2px;
    height: 8px;
  }
  &::before {
    height: 2px;
    top: 2px;
  }
`;
const SuccessMark = styled("i")`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid currentColor;
  color: #52c41a;
  border-radius: 100px;
  &::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-color: currentColor;
    border-width: 0 2px 2px 0;
    border-style: solid;
    transform-origin: bottom left;
    transform: rotate(45deg);
  }
`;

const ErrorMark = styled("i")`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;
  border: 2px solid currentColor;
  color: #ff4d4f;
  border-radius: 40px;

  &::after,
  &::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 12px;
    height: 2px;
    background: currentColor;
    transform: rotate(45deg);
    border-radius: 5px;
    top: 8px;
    left: 3px;
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const ToastIcon: React.FC<{
  className?: string;
  icon: ToastIconType;
}> = ({ className, icon }) => {
  switch (icon) {
    case "error":
      return <ErrorMark className={className} />;
    case "success":
      return <SuccessMark className={className} />;
    case "info":
      return <InfoMark className={className} />;
    case "warning":
      return <WarningMark className={className} />;
    default:
      return icon;
  }
};
