import { shallowMount } from "@vue/test-utils";
import Entry from "@/components/Entry.vue";

describe("Entry.vue", () => {
  it("renders entry.author when passed", () => {
    const entry = {
      author: "test_author",
      title: "test_title",
      created: Math.floor(Date.now() / 1000),
      thumbnail: "https://via.placeholder.com/150",
      numComments: 123,
      read: true,
    };
    const wrapper = shallowMount(Entry, {
      propsData: { entry },
    });
    expect(wrapper.text()).toMatch(entry.author);
  });

  it("renders entry.title when passed", () => {
    const entry = {
      author: "test_author",
      title: "test_title",
      created: Math.floor(Date.now() / 1000),
      thumbnail: "https://via.placeholder.com/150",
      numComments: 123,
      read: true,
    };
    const wrapper = shallowMount(Entry, {
      propsData: { entry },
    });
    expect(wrapper.text()).toMatch(entry.title);
  });

  it("renders the correct number of comments", () => {
    const entry = {
      author: "test_author",
      title: "test_title",
      created: Math.floor(Date.now() / 1000),
      thumbnail: "https://via.placeholder.com/150",
      numComments: 123,
      read: true,
    };
    const wrapper = shallowMount(Entry, {
      propsData: { entry },
    });
    expect(wrapper.find(".fa-comment").text()).toBe("123");
  });
});
