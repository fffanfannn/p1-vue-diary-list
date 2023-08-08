import { shallowMount } from "@vue/test-utils";
import DiaryList from "@/components/DiaryList.vue";

describe("DiaryList.vue", () => {
  it("if 'Previous' button is clicked, it will move to next three items", () => {
    const wrapper = shallowMount(DiaryList);
  });

  it("if 'Next' button is clicked, it will move to previous three items", () => {});
});
