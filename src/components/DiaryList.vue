<template>
  <hr />
  <div>
    <h2>Component: DiaryList</h2>
    <ul>
      <DiaryItem />
      <DiaryItem />
      <DiaryItem />
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
};
</script>
<style></style>
