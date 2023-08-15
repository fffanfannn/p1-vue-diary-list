import { shallowMount } from "@vue/test-utils";
import DiaryItem from "@/components/DiaryItem.vue";

describe("DiaryItem.vue", () => {
  it("renders diary object when passed", () => {
    const eachDiaryObj = {
      uid: 1,
      diaryTitle: "This is title 1",
      diaryContent: "This is content, this is content...",
      diaryMemory: ["achievement", "milestone"],
      diaryDate: "2023-06-01",
    };
    const wrapper = shallowMount(DiaryItem, {
      props: { eachDiaryObj },
    });
    expect(wrapper.find("h4").text()).toBe("This is title 1");
    expect(wrapper.find("li").text()).toBe("achievement");
  });

  it("if 'delete' button is clicked, deleteObjId will be emitted ", async () => {
    const wrapper = shallowMount(DiaryItem);
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().deleteObjId).toBeTruthy;
  });
});
