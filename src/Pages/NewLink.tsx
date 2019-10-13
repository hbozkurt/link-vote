import * as React from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import toast from "toasted-notes";
import { AddLink, addLink } from "../actions";

interface Props {
  dispatch(a: AddLink): void;
};

export const NewLinkForm: React.FC<Props> = ({ dispatch }) => {
  const [name, setName] = React.useState("");
  const [url, setUrl] = React.useState("");

  const nameInput = React.useRef<HTMLInputElement>(null);

  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function onUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }
  function onAdd() {
    if (!url || !name) return;

    setUrl("");
    setName("");
    dispatch(addLink(name, url));
    nameInput.current!.focus();

    toast.notify(
      <span className="mt-8 flex px-12 py-2 bg-green-200 text-xl text-green-700 border border-green-700 rounded shadow-xl">
        <h3 className="font-bold uppercase mr-2">{name}</h3><p>added.</p>
      </span>,
      { duration: 3000 }
    );
  }
  return (
    <div className="h-full flex flex-col pt-8">
      <Link to="/">
        <div className="inline-flex items-center h-8 px-4 py-1 cursor-pointer">
          <FaLongArrowAltLeft className="mr-4 font-bold text-xl" />
          <h3 className="text-l">Return to list</h3>
        </div>
      </Link>
      <h1 className="font-bold text-3xl px-4 my-8">Add New Link</h1>

      <div className="flex flex-col my-2">
        <label className="px-4 text-sm">Link Name</label>
        <input type="text"
          autoFocus={true}
          ref={nameInput}
          className="border px-2 py-1 ml-2 rounded focus:border-gray-600"
          value={name}
          onChange={onNameChange}
          placeholder="e.g. Alphabet"
        />
      </div>
      <div className="flex flex-col">
        <label className="px-4 text-sm">Link URL</label>
        <input type="text"
          className="border px-2 py-1 ml-2 rounded focus:border-gray-600"
          value={url}
          onChange={onUrlChange}
          placeholder="e.g. http://abc.xyx"
        />
      </div>

      <div className="my-4">
        <button 
          className={
            "float-right py-2 px-10 rounded-full bg-black font-bold text-white"
            + " focus:bg-gray-800 hover:bg-gray-800 hover:shadow-md"
          }
          onClick={onAdd}>
          ADD
        </button>
      </div>
    </div>
  );
}
