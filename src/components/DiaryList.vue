<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <input type="text" v-model="searchText" />
    <button @click="searchBtn">search</button>

    <ul>
      <DiaryItem
        v-for="diaryObj in searchArray"
        :key="diaryObj.id"
        :eachDiaryObj="diaryObj"
        @deleteObjId="deleteObjId"
      />
    </ul>

    <ul>
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
    <div>
      <button @click="sortByDate">Sort by date</button>
      <ul v-if="isSortedByDate">
        <DiaryItem
          v-for="diaryObj in displayedDiaryArray"
          :key="diaryObj.id"
          :eachDiaryObj="diaryObj"
          @deleteObjId="deleteObjId"
        />
      </ul>
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

  data() {
    return {
      isSortedByDate: false,
      searchArray: [],
    };
  },
  methods: {
    deleteObjId(id) {
      this.$emit("deleteObjId", id);
    },

    sortByDate() {
      this.isSortedByDate = !this.isSortedByDate;
    },

    searchBtn() {
      for (let diaryObj of this.diaryArray) {
        if (this.searchText === diaryObj.diaryTitle) {
          this.searchArray = [];
          this.searchArray.push(diaryObj);
        }
      }
    },
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

    displayedDiaryArray() {
      const copyArray = [...this.diaryArray]; // Create a copy of the prop
      if (this.isSortedByDate) {
        return copyArray.sort(
          (a, b) => new Date(b.diaryDate) - new Date(a.diaryDate)
        );
      }
      return copyArray;
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
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}
</style>
