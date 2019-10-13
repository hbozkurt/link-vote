import { reducer, getOrderedLinks } from ".";
import { State, OrderType } from "../constants";
import { SetCurrentPage, AddLink, DeleteLink, VoteUp } from "../actions";

const state: State = {
  currentPage: 1,
  orderType: OrderType.CreateTime,
  links: [
    { id: "1", name: "Lorem Ipsum", url: "http://loremipsum.com", vote: 4 },
    { id: "2", name: "Google", url: "http://google.com", vote: 2 },
    { id: "3", name: "YouTube", url: "http://youtube.com", vote: 1 },
  ],
};

describe("reducer", () => {
  describe("when action type is SET_CURRENT_PAGE", () => {
    it("should return correct state", () => {
      const action: SetCurrentPage = {
        type: "SET_CURRENT_PAGE",
        payload: 2,
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        currentPage: action.payload,
      });
    })
  });

  describe("when action type is ADD_LINK", () => {
    it("should return correct state", () => {
      const action: DeleteLink = {
        type: "DELETE_LINK",
        payload: "2"
      };
      expect(reducer(state, action)).toEqual({
        ...state,
        links: [
          { id: "1", name: "Lorem Ipsum", url: "http://loremipsum.com", vote: 4 },
          { id: "3", name: "YouTube", url: "http://youtube.com", vote: 1 },
        ]
      });
    });
  });

  describe("when action type is VOTE_UP", () => {
    it("should return correct state", () => {
      const action: VoteUp = {
        type: "VOTE_UP",
        payload: "1",
      };
      
      expect(reducer(state, action)).toEqual({
        ...state,
        links: [
          { id: "1", name: "Lorem Ipsum", url: "http://loremipsum.com", vote: 5 },
          { id: "2", name: "Google", url: "http://google.com", vote: 2 },
          { id: "3", name: "YouTube", url: "http://youtube.com", vote: 1 },
        ]
      })
    });
  });
});
