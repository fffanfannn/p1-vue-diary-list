import { shallowMount } from "@vue/test-utils";
import DiaryList from "@/components/DiaryList.vue";

describe("DiaryList.vue", () => {
  it("By default, isSortByInputDisplay value is true, isSortByDateDisplay value is false, isSortBySearchDisplay value is false", () => {
    const wrapper = shallowMount(DiaryList);
    expect(wrapper.vm.isSortByInputDisplay).toBe(true);
    expect(wrapper.vm.isSortByDateDisplay).toBe(false);
    expect(wrapper.vm.isSortBySearchDisplay).toBe(false);
  });

  it("In the menu, when 'create' button is clicked, the three values changed", async () => {
    const wrapper = shallowMount(DiaryList);
    await wrapper.vm.sortByInputDisplay();
    expect(wrapper.vm.isSortByInputDisplay).toBe(true);
    expect(wrapper.vm.isSortByDateDisplay).toBe(false);
    expect(wrapper.vm.isSortBySearchDisplay).toBe(false);
  });

  it("In the menu, when 'search' button is clicked, ", async () => {
    const wrapper = shallowMount(DiaryList);
    await wrapper.vm.sortBySearchDisplay();
    expect(wrapper.vm.isSortByInputDisplay).toBe(false);
    expect(wrapper.vm.isSortBySearchDisplay).toBe(true);
  });

  it("In the menu, when 'sort' button is clicked, ", async () => {
    const wrapper = shallowMount(DiaryList);
    await wrapper.vm.sortByDateDisplay();
    expect(wrapper.vm.isSortByInputDisplay).toBe(false);
    expect(wrapper.vm.isSortByDateDisplay).toBe(true);
  });

  it("searchBtn method should populate searchArray with matching diary objects", () => {
    const diaryArray = [
      { id: 1, diaryTitle: "Title 1" },
      { id: 2, diaryTitle: "Title 2" },
      { id: 3, diaryTitle: "Title 3" },
    ];

    const wrapper = shallowMount(DiaryList, {
      propsData: {
        diaryArray,
      },
    });

    // Set searchText to match "Title 2"
    wrapper.setData({ searchText: "Title 2" });

    // Trigger the searchBtn method
    wrapper.vm.searchBtn();

    // Expect searchArray to have one matching diary object
    expect(wrapper.vm.searchArray).toEqual([{ id: 2, diaryTitle: "Title 2" }]);
  });
});
