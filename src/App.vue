<template>
  <div id="app">
    <Welcome />
    <div class="nav-container backdrop-filter backdrop-blur-md rounded-2xl">
      <SideNav :runner-datas="runnerDatas" @set-active-runner="afterSetActiveRunner" />
      <RunnerInfo :active-runner="activeRunnerData" v-if="activeRunnerData" class="px-4 border-2 border-black"/>
    </div>
    <Map :runner-datas="runnerDatas" :active-runner="activeRunnerData"/>
  </div>
</template>

<script>
import axios from "axios";
import Map from "./components/Map";
import SideNav from "./components/SideNav";
import RunnerInfo from  "./components/RunnerInfo"
import Welcome from "./components/Welcome"

export default {
  name: "App",
  components: {
    Map,
    SideNav,
    RunnerInfo,
    Welcome
  },
  data() {
    return {
      runnerDatas: [],
      activeRunnerData: null
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
            this.runnerDatas = res.data
            console.log(res)
            localStorage.setItem("runnerDatas", JSON.stringify(this.runnerDatas));
          });
      } else {
        this.runnerDatas = cacheRunnerDatas;
      }
    },
    afterSetActiveRunner(runnerData) {
      this.activeRunnerData = runnerData
    }
  },
  created() {
    this.fetchRunnerDatas();
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
}

.leaflet-control-container {
    display: none;
}
</style>