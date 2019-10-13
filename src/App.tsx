import React from 'react';
import { Pagination, SelectBox, LinkItem, AddLink } from "./components";
import { OrderType, OrderOptions, LinkItemPerPage } from "./constants";
import * as actions from "./actions";
import { reducer, initialState, getOrderedLinks } from "./reducer";

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

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
  function onDelete(id: string) {
    dispatch(actions.deleteLink(id));
  }
  function changeRoute() {}

  return (
    <div className="h-full flex flex-col items-center">
      <AddLink onClick={changeRoute} />
      <div className="h-2 border-b-2 my-4 border-gray-500" />
      <SelectBox options={OrderOptions} onChange={onOrderTypeChange} />

      <div className="my-4 pt-2">
        {getOrderedLinks(state).map(l =>(
          <LinkItem key={l.id}
            link={l}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
            onDelete={onDelete}
          />
        ))}
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

export default App;
