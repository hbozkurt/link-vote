import { State, OrderType, Link, LinkItemPerPage } from "./constants";
import { Action, VoteUp, VoteDown, DeleteLink } from "./actions";
import data from "./data";

export const initialState: State = {
  currentPage: 1,
  orderType: OrderType.None,
  links: data,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };
    case "SET_ORDER_TYPE":
      return {
        ...state,
        orderType: action.payload,
      };
    case "DELETE_LINK_ITEM":
      return deleteLinkReducer(state, action);
    case "VOTE_DOWN":
      return voteDownReducer(state, action);
    case "VOTE_UP":
      return voteUpReducer(state, action);
    
    default:
      return state;
  }
}

export function getOrderedLinks({ currentPage, orderType, links }: State): Link[] {
  const start = (currentPage -1) * LinkItemPerPage;
  const end = start + LinkItemPerPage;

  return links.slice(start, end).sort((x, y) => {
    switch (orderType) {
      case OrderType.LessVoted:
        return x.vote < y.vote ? -1 : 1;
      case OrderType.MostVoted:
        return x.vote > y.vote ? -1 : 1;
      default:
        return 0;
    }
  });
}

function deleteLinkReducer(state: State, action: DeleteLink): State {
  const ind = state.links.findIndex(l => l.id === action.payload);
  if (ind === -1) return state;

  return {
    ...state,
    links: [
      ...state.links.slice(0, ind),
      ...state.links.slice(ind + 1),
    ]
  };
}

function voteUpReducer(state: State, action: VoteUp): State {
  const ind = state.links.findIndex(l => l.id === action.payload);
  if (ind === -1) return state;

  const link = state.links[ind];
  return {
    ...state,
    links: [
      ...state.links.slice(0, ind),
      { ...link, vote: link.vote + 1 },
      ...state.links.slice(ind + 1),
    ]
  };
}
function voteDownReducer(state: State, action: VoteDown): State {
  const ind = state.links.findIndex(l => l.id === action.payload);
  if (ind === -1) return state;

  const link = state.links[ind];
  return {
    ...state,
    links: [
      ...state.links.slice(0, ind),
      { ...link, vote: link.vote - 1 },
      ...state.links.slice(ind + 1),
    ]
  };
}
