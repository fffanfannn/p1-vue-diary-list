<template>
  <hr />
  <div>
    <h2>Component: DiaryInput</h2>
    <h3>{{ titleText }}</h3>
    <p>{{ paragraphText }}</p>

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
  </div>
</template>

<script>
export default {
  name: "DiaryInput",
  data() {
    return {
      titleText: "",
      paragraphText: "",
    };
  },

  methods: {
    submitBtn() {
      if (!this.titleText || !this.paragraphText) {
        alert("Please enter a title and a paragraph");
        return;
      }
      this.$emit("addSubmitObj", {
        diaryTitle: this.titleText,
        diaryContent: this.paragraphText,
      });
      this.titleText = "";
      this.paragraphText = "";
    },
  },
};
</script>
<style></style>
