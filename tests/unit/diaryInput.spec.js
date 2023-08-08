import { shallowMount } from "@vue/test-utils";
import DiaryInput from "@/components/DiaryInput.vue";

describe("DiaryInput.vue", () => {
  it("check input title can be displayed in title preview area", () => {
    const wrapper = shallowMount(DiaryInput);
  });

  it("check input textarea can be displayed in paragraph preview area", () => {});

  it("if has input text, when submit button is clicked, an new object will be created", () => {});

  it("if empty input, when submit button is clicked, an alert will show up", () => {});
});
