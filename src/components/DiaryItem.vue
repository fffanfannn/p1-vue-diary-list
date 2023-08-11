<template>
  <li>
    <h3>Component: DiaryItem</h3>
    <h4>{{ eachDiaryObj.diaryTitle }}</h4>
    <p>{{ eachDiaryObj.diaryContent }}</p>
    <p>{{ daysCalculation }}</p>
    <button @click="deleteBtn">Delete</button>
  </li>
</template>

<script>
export default {
  name: "DiaryItem",
  props: ["eachDiaryObj"],
  methods: {
    deleteBtn() {
      console.log(this.eachDiaryObj.uid);
      this.$emit("deleteObjId", this.eachDiaryObj.uid);
    },
  },
  computed: {
    daysCalculation() {
      const diaryDate = new Date(this.eachDiaryObj.diaryDate);
      const currentDate = new Date();
      const timeDifference = currentDate - diaryDate;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      if (daysDifference < 7) {
        return this.eachDiaryObj.diaryDate;
      } else if (daysDifference < 30) {
        const weeks = Math.floor(daysDifference / 7);
        return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
      } else {
        const months = Math.floor(daysDifference / 30);
        return `${months} month${months > 1 ? "s" : ""} ago`;
      }
    },
  },
};
</script>
<style scoped lang="scss">
li {
  width: 300px;
  padding: 1rem;
  flex-wrap: wrap;
}
</style>
