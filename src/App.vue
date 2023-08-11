<template>
  <div id="app">
    <h1>Component: App</h1>
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
          diaryTitle: "This is my diary title",
          diaryContent:
            "This is my diary content. This is my diary content.This is my diary content.",
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

    // filter()         A(a,b,c) => A(a,b)

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
