import { OrderType } from "../constants";

export type SetOrderType = ReturnType<typeof setOrderType>;
export const setOrderType = (type: OrderType) => ({
  type: "SET_ORDER_TYPE" as const,
  payload: type,
});

export type SetCurrentPage = ReturnType<typeof setCurrentPage>;
export const setCurrentPage = (currentPage: number) => ({
  type: "SET_CURRENT_PAGE" as const,
  payload: currentPage,
});

export type DeleteLink = ReturnType<typeof deleteLink>;
export const deleteLink = (id: string) => ({
  type: "DELETE_LINK" as const,
  payload: id,
});

export type VoteUp = ReturnType<typeof voteUp>;
export const voteUp = (id: string) => ({
  type: "VOTE_UP" as const,
  payload: id,
});

export type VoteDown = ReturnType<typeof voteDown>;
export const voteDown = (id: string) => ({
  type: "VOTE_DOWN" as const,
  payload: id,
});

export type AddLink = ReturnType<typeof addLink>;
export const addLink = (name: string, url: string) => ({
  type: "ADD_LINK" as const,
  payload: { name, url }
});

export type Action = SetOrderType | SetCurrentPage | DeleteLink | VoteUp | VoteDown | AddLink;
