import { shallowMount } from "@vue/test-utils";
import DiaryInput from "@/components/DiaryInput.vue";
import DiaryItem from "@/components/DiaryItem.vue";
import DiaryList from "@/components/DiaryList.vue";
import App from "@/App.vue";

describe("DiaryInput.vue", () => {
  it("check input title can be displayed in title preview area", () => {
    const wrapper = shallowMount(DiaryInput);
  });

  it("check input textarea can be displayed in paragraph preview area", () => {});

  it("if has input text, when submit button is clicked, an new object will be created", () => {});

  it("if empty input, when submit button is clicked, an alert will show up", () => {});
});

describe("DiaryItem.vue", () => {
  it("renders default object when passed", () => {
    const wrapper = shallowMount(DiaryItem);
  });

  it("if confirmed, the object id will be found and emit it", async () => {});
});

describe("DiaryList.vue", () => {
  it("if 'Previous' button is clicked, it will move to next three items", () => {
    const wrapper = shallowMount(DiaryList);
  });

  it("if 'Next' button is clicked, it will move to previous three items", () => {});
});

describe("App.vue", () => {
  it("when there is a new object, this object will be added to the original array", () => {
    const wrapper = shallowMount(App);
  });

  it("when there is delete id, the object of this id will be removed from the original array", () => {});
});
