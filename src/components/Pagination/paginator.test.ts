import paginator from "./paginator";

describe("paginator", () => {
  it("should calculate pages", () => {
    expect(paginator({
      currentPage: 2,
      length: 5,
      perPage: 3,
      totalResults: 32,
    })).toEqual({
      firstPage: 1,
      lastPage: 5,
      hasPreviousPage: true,
      hasNextPage: true
    });

    expect(paginator({
      currentPage: 7,
      length: 5,
      perPage: 20,
      totalResults: 320,
    })).toEqual({
      firstPage: 5,
      lastPage: 9,
      hasPreviousPage: true,
      hasNextPage: true
    });
  });
});
