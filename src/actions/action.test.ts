import * as actions from "./index";
import { OrderType } from "../constants";

describe("setOrderType action", () => {
  test("should return correct type and payload", () => {
    expect(actions.setOrderType(OrderType.MostVoted)).toEqual({
      type: "SET_ORDER_TYPE",
      payload: OrderType.MostVoted
    });
  });
});

describe("addLink action", () => {
  test("should return correct type and payload", () => {
    const name = "Google";
    const url = "http://google.com.tr";
    expect(actions.addLink(name, url)).toEqual({
      type: "ADD_LINK",
      payload: { name, url }
    })
  });
});
