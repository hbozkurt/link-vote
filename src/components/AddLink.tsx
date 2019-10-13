import * as React from "react";
import { FaPlus } from "react-icons/fa";

interface Props {
  onClick(): void;
}

export const AddLink: React.FC<Props> = ({ onClick }) => {
  return (
    <div onClick={onClick}
      className="flex relative w-128 p-2 rounded bg-gray-100 bg-gray-200 cursor-pointer">
      <aside className="inline-flex justify-center items-center bg-gray-400 w-12 h-12 p-4 rounded" >
        <FaPlus className="font-bold text-3xl" />
      </aside>
      <span className="flex justify-center items-center w-full">
        <p className="font-bold text-xl">SUBMIT A LINK</p>
      </span>
    </div>
  );
}
