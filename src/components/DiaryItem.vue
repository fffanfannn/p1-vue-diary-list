<template>
  <li>
    <h3>Component: DiaryItem</h3>
    <h4>{{ eachDiaryObj.diaryTitle }}</h4>
    <p>{{ eachDiaryObj.diaryContent }}</p>
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
};
</script>
<style scoped lang="scss">
li {
  width: 300px;
  padding: 1rem;
  flex-wrap: wrap;
}
</style>
