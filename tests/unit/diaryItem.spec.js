import { shallowMount } from "@vue/test-utils";
import DiaryItem from "@/components/DiaryItem.vue";

describe("DiaryItem.vue", () => {
  const eachDiaryObj = {
    uid: 1,
    diaryTitle: "This is title 1",
    diaryContent: "This is content, this is content...",
    diaryMemory: ["achievement", "milestone"],
    diaryDate: "2023-06-01",
  };

  it("renders diary object when passed", () => {
    const wrapper = shallowMount(DiaryItem, {
      props: { eachDiaryObj },
    });
    expect(wrapper.find("h4").text()).toBe("This is title 1");
    expect(wrapper.find("li").text()).toBe("achievement");
    expect(wrapper.find('[data-testid="date-calculation"]').text()).toBe(
      "2 months ago"
    );
  });

  //   it("render object from array and display them ", async () => {});

  //   it("if 'delete' button is clicked, the object id will be found, and emit it ", async () => {});
});
