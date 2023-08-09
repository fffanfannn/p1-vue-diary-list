<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <ul>
      <DiaryItem
        v-for="diaryObj in diaryArray"
        :key="diaryObj.id"
        :eachDiaryObj="diaryObj"
      />
    </ul>
    <button>Previous</button>
    <button>Next</button>
  </div>
</template>

<script>
import DiaryItem from "@/components/DiaryItem.vue";
export default {
  name: "DiaryList",
  components: {
    DiaryItem,
  },
  props: ["diaryArray"],
};
</script>
<style></style>
