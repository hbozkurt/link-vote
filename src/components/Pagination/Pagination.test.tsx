import * as React from "react";
import { create } from "react-test-renderer";
import { Pagination } from "./index";

describe("Pagination component", () => {
  test("Matches the snapshot", () => {
    const pagination = create(
      <Pagination
        currentPage={4}
        onChange={() => {}}
        totalItemsCount={96}
        itemsCountPerPage={5}
      />
    );
    expect(pagination.toJSON()).toMatchSnapshot();
  });
});
