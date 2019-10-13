import * as React from "react";
import { create } from "react-test-renderer";
import { SelectBox } from "./index";

describe("Button component", () => {
  test("Matches the snapshot", () => {
    const select = create(
      <SelectBox
        onChange={() => {}}
        options={[{ id: "1", label: "yes" }, { id: "2", label: "no" }]}
      />
    );
    expect(select.toJSON()).toMatchSnapshot();
  });
});
