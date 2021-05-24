<template>
  <div>
    <div class="start-zone flex items-center">
      <span class="cchip text-brandblue">起</span>
      <div>
        <p class="time mb-0">{{ start.time }}</p>
        <p class="location mb-0">{{ start.location }}</p>
      </div>
    </div>
    <div class="end-zone flex items-center">
      <span class="cchip text-brandwatermelon">終</span>
      <div>
        <p class="time mb-0">{{ end.time }}</p>
        <p class="location mb-0">{{ end.location }}</p>
      </div>
    </div>
    <div class="route-info-zone p-2">
      <div class="flex gap-2">
        <p class="distance">
          <font-awesome-icon class="text-brandblue" icon="clock" /> {{ timeSpend }}分鐘
        </p>
        <p class="time-spent">
          <font-awesome-icon class="text-brandblue" icon="route" />{{ distance }}公里
        </p>
      </div>
      <button
        class="check-route w-full h-14 lg:h-8 bg-brandblue text-white rounded-full active:filter active:brightness-75 focus:outline-none"
        @click.stop.prevent="checkRoute"
      >查看路徑</button>
    </div>
  </div>
</template>

<script>
import moment from "moment"

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
    },
    distance() {
      return this.getDistance(this.start.lat, this.start.lng, this.end.lat, this.end.lng, 'K')
    },
    timeSpend() {
      return moment(this.end.time).diff(this.start.time, 'minutes')
    }
  },
  methods: {
    checkRoute() {
      const lnglats = [...Array(this.cardRoute.length)].map((latlng, index) => {
        return [this.cardRoute[index].lng, this.cardRoute[index].lat];
      });

      // 將路徑latlngs透過eventbus傳送出去，並在Map.vue中監聽事件、產生對應的LGeoJson
      this.$bus.$emit("check-route", lnglats);
    },
    getDistance(lat1, lon1, lat2, lon2, unit) {
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        var radlat1 = (Math.PI * lat1) / 180;
        var radlat2 = (Math.PI * lat2) / 180;
        var theta = lon1 - lon2;
        var radtheta = (Math.PI * theta) / 180;
        var dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit == "K") {
          dist = dist * 1.609344;
        }
        if (unit == "N") {
          dist = dist * 0.8684;
        }
        return dist.toFixed(2);
      }
    }
  }
};
</script>
