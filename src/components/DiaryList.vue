<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <ul>
      <DiaryItem
        v-for="diaryObj in diaryArray.slice(-3)"
        :key="diaryObj.id"
        :eachDiaryObj="diaryObj"
        @deleteObjId="deleteObjId"
      />
    </ul>
    <button>Previous</button>
    <button @click="nextPage">Next</button>
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
  methods: {
    deleteObjId(id) {
      this.$emit("deleteObjId", id);
    },

    nextPage() {},
  },
};
</script>
<style></style>
