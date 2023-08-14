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

  it("if has input text, when submit button is clicked, addSubmitObj will be emited", async () => {
    const wrapper = shallowMount(DiaryInput);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addSubmitObj).toBeTruthy;
  });

  it("After submit button is clicked, input and textarea is empty", async () => {
    const wrapper = shallowMount(DiaryInput);
    await wrapper.find("button").trigger("click");
    expect(wrapper.find('[data-testid="inputBox"]').text()).toBe("");
    expect(wrapper.find('[data-testid="textareaBox"]').text()).toBe("");
  });
});
