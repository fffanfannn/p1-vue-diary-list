import { shallowMount } from "@vue/test-utils";
import DiaryItem from "@/components/DiaryItem.vue";

describe("DiaryItem.vue", () => {
  it("renders default object when passed", () => {
    const wrapper = shallowMount(DiaryItem);
  });

  it("when 'Delete' button is clicked, a conformation will showed up ", async () => {});

  it("if confirmed, the object id will be found ", async () => {});
});
