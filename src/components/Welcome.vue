<template>
  <div
    id="welcome-page"
    class="w-screen h-screen absolute top-0 left-0"
    :class="[{'move':firstEntered}]"
    v-if="!enteredBefore"
  >
    <div class="backdrop backdrop-filter backdrop-blur-sm w-screen h-screen flex flex-col items-center justify-center">
      <h1 class="text-7xl text-brandyellow">歡迎</h1>
      <p class="text-brandyellow">在跑跑上，找到並肩作戰的跑友吧！</p>
      <button
        class="w-4/5 lg:w-1/5 h-20 lg:h-10 rounded-full border-2 border-brandyellow text-2xl text-brandyellow font-bold active:bg-brandyellow active:text-white"
        @click.stop.prevent="enterApp"
      >開始吧</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data() {
    return {
      firstEntered: false,
      enteredBefore: false
    };
  },
  methods: {
    enterApp() {
      this.firstEntered = true;
      localStorage.setItem("enteredBefore", "true");
    }
  },
  created() {
    if (localStorage.getItem("enteredBefore")) this.enteredBefore = true;
  }
};
</script>

<style scoped>
#welcome-page {
  z-index: 100000;
  background-image: url(../../public/image/background.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: 50%;
}
</style>