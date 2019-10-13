import uuidV4 from "uuid/v4";
import { State, OrderType, Link, LinkItemPerPage, STORAGE_KEY } from "../constants";
import { Action, VoteUp, VoteDown, DeleteLink, AddLink } from "../actions";

function loadSavedLinks(): Link[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return [];

    return JSON.parse(data) as Link[];
  } catch(e) {
    console.error(e);
    return [];
  }
}

export const initialState: State = {
  currentPage: 1,
  orderType: OrderType.CreateTime,
  links: loadSavedLinks(),
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
    case "DELETE_LINK":
      return deleteLinkReducer(state, action);
    case "VOTE_DOWN":
      return voteDownReducer(state, action);
    case "VOTE_UP":
      return voteUpReducer(state, action);
    case "ADD_LINK":
      return addLinkReducer(state, action);
    
    default:
      return state;
  }
}

export function getOrderedLinks({ currentPage, orderType, links }: State): Link[] {
  const start = (currentPage -1) * LinkItemPerPage;
  const end = start + LinkItemPerPage;

  return links.sort((x, y) => {
    if (x.vote === y.vote) return 0;

    switch (orderType) {
      case OrderType.LessVoted:
        return x.vote < y.vote ? -1 : 1;
      case OrderType.MostVoted:
        return x.vote > y.vote ? -1 : 1;
      default:
        return 0;
    }
  }).slice(start, end);
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
function addLinkReducer(state: State, action: AddLink): State {

  return {
    ...state,
    links: [
      {
        id: uuidV4(),
        name: action.payload.name,
        url: action.payload.url,
        vote: 0,
      },
      ...state.links
    ]
  };
}
