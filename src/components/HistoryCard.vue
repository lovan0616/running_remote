<template>
  <div class="lg:flex">
    <div class="start-zone flex items-center lg:flex-1">
      <span class="cchip text-brandblue">起</span>
      <div>
        <p class="time mb-0">{{ start.time }}</p>
        <p class="location mb-0">{{ start.location }}</p>
      </div>
    </div>
    <div class="end-zone flex items-center lg:flex-1">
      <span class="cchip text-brandwatermelon">終</span>
      <div>
        <p class="time mb-0">{{ end.time }}</p>
        <p class="location mb-0">{{ end.location }}</p>
      </div>
    </div>
    <div class="route-info-zone lg:w-60 p-2">
      <div class="flex gap-2">
        <p class="distance">
          <font-awesome-icon class="text-brandblue" icon="clock" />12KM
        </p>
        <p class="time-spent">
          <font-awesome-icon class="text-brandblue" icon="route" />1.4hr
        </p>
      </div>
      <button class="check-route w-full h-14 lg:h-8 bg-brandblue text-white rounded-full active:filter active:brightness-75">查看路徑</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HistoryCard",
  props: {
    cardRoute: {
      type: Array
    }
  },
  computed: {
    start() {
      return this.cardRoute[0];
    },
    end() {
      return this.cardRoute[this.cardRoute.length - 1];
    }
  }
};
</script>
