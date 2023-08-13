<template>
  <hr />
  <div class="inputSection">
    <h2>Component: DiaryInput</h2>
    <h2>{{ titleText }}</h2>
    <p>{{ paragraphText }}</p>
    <!-- <form @submit.prevent="onSubmit"></form> -->
    <label for="">Title: </label>
    <input type="text" v-model="titleText" />
    <label for="">Content: </label
    ><textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="paragraphText"
    ></textarea>
    <div class="inputSelection">
      <label for="">Memories: </label>

      <input
        type="checkbox"
        name="memories1"
        value="special day"
        v-model="memory"
      />
      <label for="memories1">Special Day </label>
      <input
        type="checkbox"
        name="memories2"
        value="celebration"
        v-model="memory"
      />
      <label for="memories2">Celebration </label>
      <input
        type="checkbox"
        name="memories3"
        value="achievement"
        v-model="memory"
      />
      <label for="memories3">Achievement </label>
      <input
        type="checkbox"
        name="memories4"
        value="milestone"
        v-model="memory"
      />
      <label for="memories4">Milestone</label>
    </div>
    <input type="date" name="dateDiary" v-model="dateDiary" />
    <button @click="submitBtn">Submit</button>
    <span>{{ errorMsg }}</span>
  </div>
</template>

<script>
export default {
  name: "DiaryInput",
  data() {
    return {
      titleText: "",
      paragraphText: "",
      errorMsg: "",
      memory: [],
    };
  },

  methods: {
    submitBtn() {
      try {
        if (!this.titleText || !this.paragraphText) {
          throw new Error("ErrorInput");
        }
        this.$emit("addSubmitObj", {
          uid: Date.now(),
          diaryTitle: this.titleText,
          diaryContent: this.paragraphText,
          diaryMemory: this.memory,
          diaryDate: this.dateDiary,
        });
        this.titleText = "";
        this.paragraphText = "";
      } catch (e) {
        //   logMyErrors(e); // pass exception object to error handler (i.e. your own function)
        console.log("catch error e: ", e);
        this.errorMsg = "Please enter a title and a paragraph";
      }
    },
  },
};
</script>
<style>
.inputSelection {
  margin: 2rem 0;
}
</style>
