import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import EntryList from "@/components/EntryList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("EntryList.vue", () => {
  let actions;
  let getters;
  let store;

  beforeEach(() => {
    actions = {
      loadReadEntries: jest.fn(),
      removeEntries: jest.fn(),
    };
    getters = {
      getEntries: () => [],
    };
    store = new Vuex.Store({
      modules: {
        "reddit-entries": {
          namespaced: true,
          actions,
          getters,
        },
      },
    });
  });

  it("renders buttons and calls action on click", async () => {
    const wrapper = shallowMount(EntryList, { store, localVue });

    expect(wrapper.find("button").exists()).toBe(true);

    const galleryButton = wrapper.find("button.btn-info");
    await galleryButton.trigger("click");

    expect(actions.loadReadEntries).toHaveBeenCalled();
  });

  it("displays paginated entries correctly", () => {
    const wrapper = shallowMount(EntryList, { store, localVue });
    expect(wrapper.findAllComponents({ name: "Entry" }).length).toBe(0);
  });
});
