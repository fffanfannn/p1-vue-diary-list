import { shallowMount } from "@vue/test-utils";
import DiaryInput from "@/components/DiaryInput.vue";

describe("DiaryInput.vue", () => {
  it("if no input, when 'submit' button is clicked, error message is sent", async () => {
    const wrapper = shallowMount(DiaryInput);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find("span").text()).toBe(
      "Please enter a title and a paragraph"
    );
  });
  //   it("check input title can be displayed in title preview area", () => {});

  //   it("check input textarea can be displayed in paragraph preview area", () => {});

  //   it("if has input text, when submit button is clicked, an new object will be created, and emit it", () => {});

  //   it("if empty input, when submit button is clicked, an alert will show up", () => {});
});
