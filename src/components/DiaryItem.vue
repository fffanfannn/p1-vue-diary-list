<template>
  <div class="diaryCard">
    <div class="diaryContent">
      <h4>{{ eachDiaryObj.diaryTitle }}</h4>
      <p>{{ eachDiaryObj.diaryContent }}</p>
      <ul>
        <li v-for="(tag, index) in eachDiaryObj.diaryMemory" :key="index">
          {{ tag }}
        </li>
      </ul>
    </div>
    <!-- <p>Memory: {{ eachDiaryObj.diaryMemory }}</p> -->
    <div class="diaryDate">
      <button @click="deleteBtn">Delete</button>
      <p date-testid="date-calculation">{{ daysCalculation }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiaryItem",
  props: ["eachDiaryObj"],
  data() {
    return {
      isHasMemory: this.isMemory,
    };
  },

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

    // isHasMemory() {
    //   if (document.getElementById("box") == "") {
    //     return (this.isMemory = false);
    //   } else {
    //     return (this.isMemory = true);
    //   }
    // },
  },
};
</script>
<style scoped lang="scss"></style>
