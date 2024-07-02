import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("renders the navbar correctly", () => {
    const wrapper = shallowMount(Navbar);

    expect(wrapper.find(".navbar").exists()).toBe(true);
    expect(wrapper.text()).toContain("Reto Tecnico Reddit");
  });

  it("emits logout event on click", async () => {
    const wrapper = shallowMount(Navbar);

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(wrapper.emitted().logout).toBeTruthy();
  });
});
