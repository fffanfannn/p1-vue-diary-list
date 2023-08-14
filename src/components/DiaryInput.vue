<template>
  <section class="diaryCreate">
    <div class="container">
      <h2>Create Diary</h2>
      <form @submit.prevent="onSubmit">
        <div class="formBox">
          <div class="inputControl">
            <label for="">Title: </label>
            <input
              class="inputBox"
              type="text"
              v-model="titleText"
              data-testid="inputBox"
            />
          </div>
          <div class="inputControl">
            <label for="">Content:</label>
            <textarea
              class="inputBox"
              name=""
              id=""
              cols="30"
              rows="10"
              v-model="paragraphText"
              data-testid="textareaBox"
            ></textarea>
          </div>
          <div class="inputControl">
            <label for="">Memories: </label>
            <div class="inputBox checkBox">
              <div>
                <input
                  type="checkbox"
                  name="memories1"
                  value="special day"
                  v-model="memory"
                />
                <label for="memories1">Special Day </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="memories2"
                  value="celebration"
                  v-model="memory"
                />
                <label for="memories2">Celebration </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="memories3"
                  value="achievement"
                  v-model="memory"
                />
                <label for="memories3">Achievement </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="memories4"
                  value="milestone"
                  v-model="memory"
                />
                <label for="memories4">Milestone</label>
              </div>
            </div>
          </div>
          <div class="inputControl">
            <label for="">Date:</label>
            <input
              class="inputBox"
              type="date"
              name="dateDiary"
              v-model="dateDiary"
            />
          </div>
          <button @click="submitBtn">Submit</button>
        </div>
      </form>
      <span>{{ errorMsg }}</span>
    </div>
  </section>
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
<style scoped lang="scss"></style>
