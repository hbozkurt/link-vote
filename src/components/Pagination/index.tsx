import * as React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Button } from "./Button";
import paginator from "./paginator";
import { range } from "../../utils";

interface Props {
  currentPage: number;
  totalItemsCount: number;
  itemsCountPerPage: number;
  onChange(activePage: number): void;
}

export const Pagination: React.FC<Props> = props => {
  const { firstPage, lastPage, hasNextPage, hasPreviousPage } = paginator({
    length: 5,
    currentPage: props.currentPage,
    perPage: props.itemsCountPerPage,
    totalResults: props.totalItemsCount,
  });

  return (
    <div className="flex text-gray-800">
      <Button
        classNames="rounded-l" 
        disabled={!hasPreviousPage}
        onClick={() => props.onChange(props.currentPage - 1)}>
        <FaAngleLeft />
      </Button>
      
      {range(lastPage - firstPage + 1, firstPage).map(n => (
        <Button key={n}
          onClick={() => props.onChange(n)}
          active={props.currentPage === n}>
          {n}
        </Button>
      ))}

      <Button 
        classNames="rounded-r"
        disabled={!hasNextPage}
        onClick={() => props.onChange(props.currentPage + 1)}>
        <FaAngleRight />
      </Button>
    </div>
  );
}
