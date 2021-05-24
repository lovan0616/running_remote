<template>
  <div id="app">
    <Welcome v-if="!isAppEverEntered" @enter-app="afterEnterApp" />
    <Tutorial v-if="!isTutorialEverShown && isAppEverEntered" @end-tutorial="afterEndTutorial" />
    <div
      v-if="isAppEverEntered"
      class="nav-container flex flex-col absolute top-0 left-0 lg:h-screen border border-white backdrop-filter backdrop-blur-md rounded-xl w-screen lg:w-1/4 transform "
      :class="[{'-translate-y-90%':fold},{'lg:-translate-y-0':fold},{'lg:-translate-x-90%':fold},{ctransition:fold}]"
    >
      <SideNav :runner-datas="runnerDatas" @set-active-runner="afterSetActiveRunner" />
      <RunnerInfo :active-runner="activeRunnerData" v-if="activeRunnerData" class="px-4 flex-1" />
      <div class="fold-control cursor-pointer bg-white text-brandblue rounded-xl p-1 lg:w-7 lg:leading-5 absolute -bottom-10 lg:bottom-1/2 lg:translate-y-1/2 right-1/2 lg:-right-6 transform translate-x-1/2 text-center" @click.stop.prevent="fold = !fold">{{ fold ? 
      '點此展開' : '點此收合'}}</div>
    </div>
    <Map v-if="isAppEverEntered" :runner-datas="runnerDatas" :active-runner="activeRunnerData" />
  </div>
</template>

<script>
import axios from "axios";
import Map from "./components/Map";
import SideNav from "./components/SideNav";
import RunnerInfo from "./components/RunnerInfo";
import Welcome from "./components/Welcome";
import Tutorial from "./components/Tutorial"

export default {
  name: "App",
  components: {
    Map,
    SideNav,
    RunnerInfo,
    Welcome,
    Tutorial
  },
  data() {
    return {
      runnerDatas: [],
      activeRunnerData: null,
      isAppEverEntered: false,
      isTutorialEverShown: false,
      fold: false
    };
  },
  methods: {
    fetchRunnerDatas() {
      const cacheRunnerDatas = JSON.parse(localStorage.getItem("runnerDatas"));

      if (!cacheRunnerDatas) {
        axios
          .get(
            "https://b09f7822-276f-4b86-8a9e-89882e9b3372.mock.pstmn.io/runners"
          )
          .then(res => {
            this.runnerDatas = res.data;
            console.log(res);
            localStorage.setItem(
              "runnerDatas",
              JSON.stringify(this.runnerDatas)
            );
          });
      } else {
        this.runnerDatas = cacheRunnerDatas;
      }
    },
    afterSetActiveRunner(runnerData) {
      this.activeRunnerData = runnerData;
    },
    afterEndTutorial() {
      this.isTutorialEverShown = true
      localStorage.setItem("tutorialShown","true")
    },
    checkIsAppEverEntered() {
      if (localStorage.getItem("enteredBefore")) this.isAppEverEntered = true;
    },
    checkIsTutorialEverShown() {
      if (localStorage.getItem("tutorialShown")) this.isTutorialEverShown = true
    },
    afterEnterApp() {
      this.isAppEverEntered = true
    }
  },
  created() {
    this.checkIsAppEverEntered();
    this.checkIsTutorialEverShown();
    this.fetchRunnerDatas();
    this.$bus.$on(
      "set-active-runner",
      runnerData => (this.activeRunnerData = runnerData)
    );
  }
};
</script>

<style scoped>
http,
body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.nav-container {
  z-index: 1000;
}

.leaflet-control-container {
  display: none;
}
</style>