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
      <p>{{ daysCalculation }}</p>
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
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 900px;
  width: 90%;
  margin: 0 auto;
}
.diaryCard {
  padding: 1rem 2rem;
  border: 1px solid rgb(175, 175, 175);
  text-align: left;
  width: 90%;
  margin: 1rem auto;
  border-radius: 10px;

  .diaryContent {
    h4 {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    p {
      margin-bottom: 1rem;
    }

    ul {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;

      li {
        padding: 5px 10px;
        border: 1px solid rgb(143, 193, 235);
        border-radius: 15px;
        font-size: 0.8rem;
      }
    }
  }

  .diaryDate {
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      padding: 7px 15px;
      font-size: 1rem;
      transition: 1s;
      border-radius: 10px;
      background-color: #cae8ff;

      &:hover {
        background-color: rgb(255 186 0);
        cursor: pointer;
      }
    }
  }
}
</style>
