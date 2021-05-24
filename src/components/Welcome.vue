<template>
  <div
    id="welcome-page"
    class="w-screen h-screen absolute top-0 left-0"
    :class="[{'move':firstEntered}]"
  >
    <div
      class="w-screen h-screen p-5 bg-gradient-to-t from-white to-transparent flex items-end justify-center text-brandwatermelon"
    >
      <div class="flex flex-col items-center justify-center animate__animated animate__bounceInUp animate__slow">
        <h1 class="text-7xl">歡迎</h1>
        <p class="font-semibold mb-2">在跑跑上，找到並肩作戰的跑友吧！</p>
        <button
          class="w-full h-20 lg:h-10 rounded-full bg-brandwatermelon text-2xl font-bold text-white active:filter active:brightness-75 focus:outline-none"
          @click.stop.prevent="enterApp"
        >開始吧</button>
      </div>
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

      this.$emit('enter-app')
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