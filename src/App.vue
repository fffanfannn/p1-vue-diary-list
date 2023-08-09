<template>
  <div id="app">
    <h1>Component: App</h1>
    <DiaryList :diaryArray="diaryArray" />
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
      diaryArray: [],
    };
  },
  methods: {
    addSubmitObj(obj) {
      this.diaryArray.push(obj);
      console.log(this.diaryArray);
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
