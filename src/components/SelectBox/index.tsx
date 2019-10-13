import * as React from "react";
import { FaCaretDown } from "react-icons/fa";

type Option = {
  id: string;
  label: string;
};

interface Props {
  options: Option[];
  onChange(id: string): void;
}

export const SelectBox: React.FC<Props> = props => {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    props.onChange(e.target.value);
  }
  return (
    <div className="relative inline-block w-64">
      <select className="appearance-none border w-64 h-8 bg-gray-100"
        onChange={onChange}>
        {props.options.map(o => (
          <option key={o.id} value={`${o.id}`}>
            {o.label}
          </option>
        ))}
      </select>
      {/* TODO: FIX onClick */}
      <span className="absolute w-8 h-8 p-2 top-0 right-0 text-lg">
        <FaCaretDown />
      </span>
    </div>
  );
}
