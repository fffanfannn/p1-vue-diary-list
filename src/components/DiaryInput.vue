<template>
  <section class="diaryCreate">
    <div class="container">
      <h2>Create Diary</h2>
      <form @submit.prevent="onSubmit">
        <div class="formBox">
          <div class="inputControl">
            <label for="">Title: </label>
            <input class="inputBox" type="text" v-model="titleText" />
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

.diaryCreate {
  padding: 20px 0;

  .container {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.19);
    padding: 2rem;
    border-radius: 10px;
    h2 {
      margin-bottom: 2rem;
    }

    .formBox {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      text-align: left;

      .inputControl {
        display: flex;

        label {
          width: 30%;
        }

        .inputBox {
          width: 70%;

          input {
            margin-right: 1rem;
          }
        }

        textarea {
          height: 80px;
        }
      }
      button {
        border: none;
        padding: 7px 15px;
        font-size: 1rem;
        transition: 1s;
        background-color: #6bbfff;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        letter-spacing: 0.1rem;
        margin: 1rem 0;
        display: block;

        &:hover {
          background-color: rgb(255 186 0);
          cursor: pointer;
        }
      }
    }

    span {
      color: rgb(255 186 0);
      font-weight: 900;
    }
  }
}
</style>
