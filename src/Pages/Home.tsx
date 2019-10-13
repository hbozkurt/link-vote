import * as React from "react";
import toast from "toasted-notes";
import { Pagination, SelectBox, LinkItem, AddLink } from "../components";
import { OrderType, OrderOptions, LinkItemPerPage, State } from "../constants";
import * as actions from "../actions";
import { getOrderedLinks } from "../reducer";

interface Props {
  dispatch(a: actions.Action): void;
  state: State
}

export const Home: React.FC<Props> = ({ dispatch, state }) => {
  function onOrderTypeChange(id: string) {
    dispatch(actions.setOrderType(id as OrderType));
  }
  function onCurrentPageChange(currentPage: number) {
    dispatch(actions.setCurrentPage(currentPage));
  }
  function onVoteDown(id: string) {
    dispatch(actions.voteDown(id));
  }
  function onVoteUp(id: string) {
    dispatch(actions.voteUp(id));
  }
  function onDelete(id: string, name: string) {
    dispatch(actions.deleteLink(id));

    toast.notify(
      <span className="mt-8 flex px-12 py-2 bg-green-200 text-xl text-green-700 border border-green-700 rounded shadow-xl">
        <h3 className="font-bold uppercase mr-2">{name}</h3><p>removed.</p>
      </span>,
      { duration: 3000 }
    );
  }

  const list = getOrderedLinks(state);
  return (
    <div className="h-full flex flex-col pt-2">
      <AddLink />
      <div className="h-2 w-128 border-b-2 my-4 border-gray-500" />
      <SelectBox options={OrderOptions} onChange={onOrderTypeChange} />

      <div className="my-4 pt-2">
        {!list.length
          ? <h3 className="text-xl text-center w-128" >You have no saved link!</h3>
          : list.map(l =>(
              <LinkItem key={l.id}
                link={l}
                onVoteUp={onVoteUp}
                onVoteDown={onVoteDown}
                onDelete={onDelete}
              />
          ))
        }
      </div>

      <Pagination
        currentPage={state.currentPage}
        itemsCountPerPage={LinkItemPerPage}
        totalItemsCount={state.links.length}
        onChange={onCurrentPageChange}
      />
    </div>
  );
}
