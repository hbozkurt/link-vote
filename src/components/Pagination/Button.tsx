import * as React from "react";

interface Props {
  active?: boolean;
  onClick?(): void;
  disabled?: boolean;
  classNames?: string;
}

export const Button: React.FC<Props> = props => {
  const cs = ["border", "w-8", "h-8", "p-4", "flex", "justify-center", "items-center"];
  cs.push(props.active ? "bg-gray-900 text-white cursor-default" : "cursor-pointer");
  
  if (props.disabled) {
    cs.push("cursor-not-allowed");
  }
  if (props.classNames) {
    cs.push(props.classNames);
  }

  return (
    <span
      className={cs.join(" ")}
      onClick={!props.disabled ? props.onClick : undefined}>
      <span>{props.children}</span>
    </span>
  );
}
