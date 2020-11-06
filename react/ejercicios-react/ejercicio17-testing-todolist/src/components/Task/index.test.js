import Task from "./index";
import React from "react";
import { shallow } from "enzyme";

describe("Task component", () => {
  it("Content should render correctly", () => {
    const component = shallow(<Task task="prueba" />);
    const items = component.find("li");
    expect(items.text()).toBe("prueba");
  });
});