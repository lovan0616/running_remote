<template>
  <div
    id="tutorial"
    class="h-screen w-screen bg-white bg-opacity-60 absolute flex justify-center items-center"
  >
    <div class="bg-white border-8 border-brandblue">
      <div class="page p-2">
        <span class="ccircle bg-brandblue text-white">1</span>
        <span class="ml-4 text-2xl text-gray-800">尋找跑跑上的跑者</span>
        <div class="page-content" v-if="checking == 1">
          <p class="mt-2 text-gray-700">您可以點擊選單上的名字，或地圖上的跑者圖示，找到跑者</p>
          <img class="max-h-96" src="../../public/image/step1.png" />
          <div class="w-full flex">
            <button
              @click.stop.prevent="nextStep"
              class="cbtnaffect rounded-md w-full lg:w-24 p-2 bg-brandblue text-white ml-auto"
            >OK!</button>
          </div>
        </div>
      </div>
      <div class="page p-2">
        <span class="ccircle bg-brandblue text-white">2</span>
        <span class="ml-4 text-2xl text-gray-800">查看跑者介紹</span>
        <div class="page-content" v-if="checking == 2">
          <p class="mt-2 text-gray-700">您可以在電腦版左側、手機版上測的資訊欄，看到跑者資訊，您還能切換分頁，看到跑者的歷史路程、紀錄統計等資訊</p>
          <img class="max-h-96" src="../../public/image/step2.png" />
          <div class="flex w-full">
            <button
              @click.stop.prevent="nextStep"
              class="cbtnaffect rounded-md w-full lg:w-24 p-2 bg-brandblue text-white ml-auto"
            >OK!</button>
          </div>
        </div>
      </div>
      <div class="page p-2">
        <span class="ccircle bg-brandblue text-white">3</span>
        <span class="ml-4 text-2xl text-gray-800">收起欄位</span>
        <div class="page-content" v-if="checking == 3">
          <p class="mt-2 text-gray-700">若您想暫時收起欄位框，只要點擊一旁的按鈕就能收起、展開欄位囉</p>
          <img class="max-h-96" src="../../public/image/step3.png" />
          <div class="flex m-full">
            <button
              @click.stop.prevent="nextStep"
              class="cbtnaffect rounded-md w-full lg:w-28 p-2 bg-brandblue text-white ml-auto"
            >我準備好了!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tutorial",
  data() {
    return {
      checking: 1,
      maxStep: 3
    };
  },
  methods: {
    nextStep() {
      if (this.checking === this.maxStep) {
        this.$emit("end-tutorial");
        return;
      }
      this.checking += 1;
    }
  }
};
</script>

<style scoped>
#tutorial {
  z-index: 1001;
}
</style>