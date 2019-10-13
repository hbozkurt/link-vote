export const STORAGE_KEY = "__VOTE_LINK__";

export enum OrderType {
  CreateTime = "0",
  MostVoted = "1",
  LessVoted = "2",
};
export const OrderOptions = [
  { id: OrderType.CreateTime, label: "Order By" },
  { id: OrderType.MostVoted, label: "Most Voted (Z -> A)" },
  { id: OrderType.LessVoted, label: "Less Voted (A -> Z)" },
];

export interface Link {
  name: string;
  url: string;
  vote: number;
  id: string;
}

export const LinkItemPerPage = 3;

export interface State {
  currentPage: number;
  orderType: OrderType;
  links: Link[];
};
