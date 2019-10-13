import * as React from "react";
import { FaTimes } from "react-icons/fa";

interface Props {
  name: string;
  onCancel(): void;
  onOK(): void;
}

export const DeleteModal: React.FC<Props> = props => {
  return (
    <div className="fixed inset-0 z-20 bg-transparent">
      <div className="bg-gray-300 w-96 mt-24 mx-auto shadow-2xl">
        <div className="flex justify-between items-center px-2 py-1 bg-black text-white text-xl">
          <h2>Remove Link</h2>
          <span onClick={props.onCancel}>
            <FaTimes className="font-bold cursor-pointer" />
          </span>
        </div>
        <div className="py-4 flex flex-col justify-center items-center">
          <div className="mb-4">
            <p>Do you want to remove:</p>
            <h3 className="text-2xl font-bold uppercase text-center">{props.name}</h3>
          </div>
          <div>
            <button 
              onClick={props.onCancel}
              className="rounded-full py-1 px-4 text-white bg-black w-32 font-bold mr-12">
                Cancel</button>
            <button 
              onClick={props.onOK}
              className="rounded-full py-1 px-4 text-white bg-black font-bold w-32">
                OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
