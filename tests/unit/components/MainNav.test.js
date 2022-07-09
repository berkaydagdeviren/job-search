import { mount } from "@vue/test-utils";

import MainNav from "@/components/MainNav";

describe("MainNav", () => {
  it("displays company name", () => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Radical Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    const MenuItems = wrapper
      .findAll("[data-test='main-nav-list-item']")
      .map((item) => item.text());
    console.log(MenuItems);
    expect(MenuItems).toEqual([
      "Teams",
      "Locations",
      "Life at Radical",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});

describe("when user is logged out", () => {
  it("prompts user to log in", () => {
    const wrapper = mount(MainNav);

    const loginButton = wrapper.find("[data-test='login-button']");
    const profileImage = wrapper.find("[data-test='profile-image']");
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
  });
});

describe("when user is logs in", () => {
  it("displays profile image", async () => {
    const wrapper = mount(MainNav);
    let profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(false);
    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");
    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });
});
