<template>
  <div id="app">
    <DiaryList :diaryArray="diaryArray" @deleteObjId="deleteObjId" />
    <DiaryInput @addSubmitObj="addSubmitObj" />
  </div>
</template>

<script>
import DiaryList from "./components/DiaryList.vue";
import DiaryInput from "./components/DiaryInput.vue";

export default {
  name: "App",
  components: {
    DiaryList,
    DiaryInput,
  },
  data() {
    return {
      diaryArray: [
        {
          uid: 1,
          diaryTitle: "This is title 1",
          diaryContent: "This is content, this is content...",
          diaryMemory: ["achievement", "milestone"],
          diaryDate: "2023-06-01",
        },

        {
          uid: 2,
          diaryTitle: "This is title 2",
          diaryContent: "This is content, this is content...",
          diaryMemory: ["celebration", "milestone"],
          diaryDate: "2023-07-20",
        },

        {
          uid: 3,
          diaryTitle: "This is title 3",
          diaryContent: "This is content, this is content...",
          diaryMemory: ["achievement", "special day"],
          diaryDate: "2023-08-11",
        },
      ],
    };
  },
  methods: {
    addSubmitObj(obj) {
      this.diaryArray.push(obj);
      console.log(this.diaryArray);
    },

    // reduce()
    // concat()         A + B  => A(A+B)

    // filter()         A(a,b,c) => B(a,b)

    // pop()        A(a,b,c) => A(c)
    // shift()      A(a,b,c) => A(a)

    // push(c)      A(a,b) => A(a,b,c)
    // unshift(z)   A(a,b) => A(z,a,b)

    deleteObjId(id) {
      this.diaryArray = this.diaryArray.filter(
        (eachDiaryObj) => eachDiaryObj.uid != id
      );
      console.log("app:", id);
    },
  },
};
</script>

<style lang="scss">
// global style
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  max-width: 1100px;
  width: 90%;
  margin: 0 auto;
}

// specific style

header {
  margin-bottom: 2rem;
  .flexbox {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: 80%;
    margin: 0 auto;

    .logo {
      display: flex;
      justify-content: space-between;
      align-items: center;

      svg {
        width: 90px;
        height: 90px;
        .cls-1 {
          fill: #f4c23f;
        }
        .cls-2 {
          fill: #f4a93f;
        }
        .cls-3 {
          fill: #67baeb;
        }
        .cls-4 {
          fill: #46a1f8;
        }
        .cls-5 {
          fill: #4d4c78;
        }
        .cls-6 {
          fill: #323150;
        }
        .cls-7 {
          fill: #de3226;
        }
        .cls-8 {
          fill: #231f20;
        }
        .cls-9 {
          fill: #b9b1e0;
        }
        .cls-10 {
          fill: #b11a31;
        }
        .cls-11 {
          fill: #b1a9d6;
        }
        .cls-12 {
          fill: #83d0fb;
        }
        .cls-13 {
          fill: #fad564;
        }
        .cls-14 {
          fill: #f44533;
        }
        .cls-15 {
          fill: #64639c;
        }
      }

      h1 {
        letter-spacing: 0.2rem;
      }
    }

    ul {
      display: flex;
      list-style: none;
      margin: 0 auto;
      width: 100%;
      border: 1px solid rgb(72, 182, 255);
      border-radius: 10px;
      overflow: hidden;

      li {
        width: 100%;
      }

      .middleBtn {
        border-right: 1px solid rgb(72, 182, 255);
        border-left: 1px solid rgb(72, 182, 255);
      }

      button {
        border: none;
        padding: 7px 15px;
        font-size: 1rem;
        transition: 1s;
        background-color: transparent;
        letter-spacing: 0.1rem;
        display: block;
        width: 100%;
        color: rgb(0, 153, 255);
        font-weight: 600;

        &:hover {
          cursor: pointer;
        }
      }

      .isSortByInputDisplay {
        background-color: rgb(88 177 236);
        color: white;
      }

      .isSortBySearchDisplay {
        background-color: rgb(88 177 236);
        color: white;
      }

      .isSortByDateDisplay {
        background-color: rgb(88 177 236);
        color: white;
      }
    }
  }
}

.inputDisplay {
  padding: 20px 0;
  .pageBtn {
    margin: 2rem auto;
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
}

.searchDisplay {
  padding: 20px 0;
  input {
    padding: 7px 15px;
    border: 1px solid rgb(183, 216, 255);
    margin-bottom: 3rem;
  }
  button {
    border: none;
    padding: 7px 15px;
    font-size: 1rem;
    transition: 1s;
    background-color: #6bbfff;
    color: white;

    &:hover {
      background-color: rgb(255 186 0);
      cursor: pointer;
    }
  }
}

.dateDisplay {
  padding: 20px 0;
  .sort-btn {
    border: none;
    padding: 7px 15px;
    font-size: 1rem;
    transition: 1s;
    background-color: #6bbfff;
    width: 280px;
    color: white;
    letter-spacing: 0.1rem;
    border-radius: 10px;
    margin-bottom: 3rem;

    &:hover {
      background-color: rgb(255 186 0);
      cursor: pointer;
    }
  }
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
      color: black;

      &:hover {
        background-color: rgb(255 186 0);
        cursor: pointer;
      }
    }
  }
}

.diaryCreate {
  padding: 20px 0;

  .container {
    box-shadow: 0 6px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 16px 0 rgba(0, 0, 0, 0.19);
    padding: 2rem;
    border-radius: 10px;
    h2 {
      margin-bottom: 2rem;
      letter-spacing: 0.1rem;
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

@media screen and (min-width: 768px) {
  header {
    .flexbox {
      flex-direction: row;
      width: 100%;
      gap: 0rem;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 40%;
        gap: 1.5rem;
        justify-content: flex-start;
        svg {
          width: 120px;
          height: 120px;
          display: block;
        }
        h1 {
          font-size: 2rem;
          text-align: left;
        }
      }
      ul {
        width: 50%;
        justify-content: end;
        margin: 0 0;
      }
    }
  }

  .diaryCreate {
    .checkBox {
      display: flex;
      justify-content: start;
      flex-wrap: wrap;

      div {
        width: 50%;
        margin-bottom: 0.5rem;
      }
    }
  }
}

@media screen and (min-width: 1080px) {
  header {
    .flexbox {
      .logo {
        h1 {
          font-size: 2.5rem;
        }
      }
    }
  }

  .flexbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .diaryCard {
      width: calc((100% - 3rem) / 3);
      padding: 2.5rem 2rem;
    }
  }
}
</style>
