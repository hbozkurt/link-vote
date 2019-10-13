import * as React from "react";
import { FaArrowUp, FaArrowDown, FaMinusCircle } from "react-icons/fa";
import { DeleteModal } from "./DeleteModal";
import { Link } from "../constants";

interface Props {
  link: Link;
  onVoteUp(id: string): void;
  onVoteDown(id: string): void;
  onDelete(id: string, name: string): void;
}

export const LinkItem: React.FC<Props> = ({ link, onVoteDown, onVoteUp, onDelete }) => {
  const [isDeleteBtnVisible, setDeleteBtnVisibility] = React.useState(false);
  const [isDeleteConfirmModalVisible, setDeleteConfirmModalVisibility] = React.useState(false);

  function onConfirm() {
    setDeleteConfirmModalVisibility(false);
    onDelete(link.id, link.name);
  }
  return (
    <div onMouseEnter={() => setDeleteBtnVisibility(true)} onMouseLeave={() => setDeleteBtnVisibility(false)}
      className="flex relative w-128 p-2 rounded bg-gray-100 hover:bg-gray-200">
      <aside className="text-center bg-gray-400 w-24 h-24 p-4 rounded" >
        <p className="font-bold text-3xl">{link.vote}</p>
        POINTS
      </aside>
      <div className="w-full ml-8">
        <h3 className="font-bold text-xl" >{link.name}</h3>
        <p className="text-gray-700">({link.url})</p>

        <div className="flex mt-3 h-8 text-gray-700 text-sm">
          <span onClick={() => onVoteUp(link.id)}
            className="inline-flex items-center hover:bg-gray-400 rounded cursor-pointer px-2 mr-8" >
            <FaArrowUp className="mr-2" />Up Vote
          </span>
          <span onClick={() => onVoteDown(link.id)}
            className="inline-flex items-center hover:bg-gray-400 rounded cursor-pointer px-2">
            <FaArrowDown className="mr-2" />Down Vote
          </span>
        </div>
      </div>
      {isDeleteBtnVisible && 
        <div onClick={() => setDeleteConfirmModalVisibility(true)}
          className="absolute -top-2 right-0 w-2 h-2 text-red-900 cursor-pointer">
          <FaMinusCircle />
        </div>
      }

      {isDeleteConfirmModalVisible &&
        <DeleteModal
          name={link.name}
          onCancel={() => setDeleteConfirmModalVisibility(false)}
          onOK={onConfirm}
        />
      }
    </div>
  );
}
