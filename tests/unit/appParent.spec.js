import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("when there is a new object, this object will be added to the original array", () => {
    const wrapper = shallowMount(App);
  });

  it("when there is delete id, the object of this id will be removed from the original array", () => {});
});
