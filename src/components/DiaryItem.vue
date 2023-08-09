<template>
  <h3>Component: DiaryItem</h3>
  <li>
    <h4>{{ eachDiaryObj.diaryTitle }}</h4>
    <p>{{ eachDiaryObj.diaryContent }}</p>
    <button>Delete</button>
  </li>
</template>

<script>
export default {
  name: "DiaryItem",
  props: ["eachDiaryObj"],
};
</script>
<style></style>
