<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <ul>
      <button @click="sortByDate">Sort by date</button>
      <DiaryItem
        v-for="diaryObj in diaryArray.slice(-3)"
        :key="diaryObj.id"
        :eachDiaryObj="diaryObj"
        @deleteObjId="deleteObjId"
      />
    </ul>
    <div class="pageBtn">
      <h3>Total: {{ diaryNum }}</h3>
      <button @click="previousPage">Previous</button>
      <h3>Page: / {{ pageCount }}</h3>
      <button @click="nextPage">Next</button>
    </div>
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

    sortByDate() {},
  },

  computed: {
    diaryNum() {
      const diarynum = this.diaryArray.length;
      return diarynum;
    },

    pageCount() {
      const pagecount = Math.ceil(this.diaryArray.length / 3);
      return pagecount;
    },
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
<style scoped lang="scss">
ul {
  display: flex;
  gap: 3rem;
  margin: auto;
  justify-content: center;
  align-items: start;
  list-style: none;
}

.pageBtn {
  margin-top: 3rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
