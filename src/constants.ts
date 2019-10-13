export enum OrderType {
  None = "0",
  MostVoted = "1",
  LessVoted = "2",
}
export const OrderOptions = [
  { id: OrderType.None, label: "Order By" },
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
