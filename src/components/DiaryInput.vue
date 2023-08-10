<template>
  <hr />
  <div>
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
<style></style>
