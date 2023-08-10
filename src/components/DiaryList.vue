<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <ul>
      <DiaryItem
        v-for="diaryObj in definedArray"
        :key="diaryObj.id"
        :eachDiaryObj="diaryObj"
        @deleteObjId="deleteObjId"
      />
    </ul>
    <button @click="previousPage">Previous</button>
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

    previousPage() {},
    nextPage() {},
  },

  // computed: {
  //   definedArray() {
  //     if (previousPage) {
  //       return this.diaryArray.slice(-6, -3);
  //     }
  //     return this.diaryArray.slice(-3);
  //   },
  // },
};
</script>
<style></style>
