<template>
  <div id="side-nav" class="mt-3">
    <ol class="nav-panel w-full h-full flex overflow-scroll">
      <li
        v-for="runnerData in runnerDatas"
        :key="runnerData.userId"
        @click.stop.prevent="setActiveRunner(runnerData)"
        class="w-40 min-w-c140 p-3 mr-3 rounded-xl bg-brandblue odd:bg-brandpurple text-white text-center font-bold text-2xl cursor-pointer transform hover:scale-110 transition duration-300"
      >{{ runnerData.name }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "SideNav",
  props: {
    runnerDatas: {
      type: Array,
      required: true
    }
  },
  methods: {
    setActiveRunner(runnerData) {
      this.$bus.$emit("set-active-runner", runnerData);
    }
  }
};
</script>