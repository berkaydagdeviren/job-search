import { mount } from "@vue/test-utils";

import ActionButton from "@/components/ActionButton";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "I'm so clickable",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("I'm so clickable");
  });

  it("applies one of several styles to the button", () => {
    const wrapper = mount(ActionButton, {
      props: {
        type: "primary",
        text: "I'm so clickable",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
