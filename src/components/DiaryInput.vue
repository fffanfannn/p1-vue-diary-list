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
      <input type="radio" name="memories1" value="speDay" />
      <label for="memories1">Special Day </label>
      <input type="radio" name="memories2" value="celebration" />
      <label for="memories2">Celebration </label>
      <input type="radio" name="memories3" value="achievement" />
      <label for="memories3">Achievement </label>
      <input type="radio" name="memories4" value="milestone" />
      <label for="memories4">Milestone</label>
    </div>
    <input type="date" name="dateDiary" v-model="dateDiary" />
    <button @click="submitBtn">Submit</button>
    <p>{{ errorMsg }}</p>
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
