<template>
  <div>
    <div id="map">
      <l-map ref="myMap" :zoom="zoom" :center="center" :options="options" style="height: 100vh">
        <l-tile-layer :url="url" :attribution="attribution" />
        <l-marker :lat-lng="[25.04, 121.53]" :draggable="true">
          <l-icon icon-url="../icon/present.png" :iconSize="iconSize" />
        </l-marker>

        <RunnerMarker v-for="runnerData in runnerDatas" :key="runnerData.sno" :runner-data="runnerData" />
      </l-map>
    </div>
  </div>
</template>

<script>
import RunnerMarker from "../components/RunnerMarker";
// 載入leaflet和leaflet-routing-machine
// import L from "leaflet";
// import Routing from 'leaflet-routing-machine'

export default {
  name: "Map",
  components: {
    RunnerMarker
  },
  data() {
    return {
      myMap: null,
      zoom: 10,
      center: [25, 121.15],
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      options: {
        zoomControl: false
      },
      iconSize: [64, 64]
    };
  },
  props: {
    runnerDatas: {
      type: Array,
      required: true
    },
    activeRunner: {
      type: Object
    }
  },
  watch: {
    activeRunner(newValue, oldValue) {
      console.log(oldValue)
      //移動到actibeRunner位置
      this.myMap.flyTo([newValue.lat, newValue.lng], 17);

      //Todo:產生導航路線
      // L.Routing.control({
      //   waypoints: [L.latLng(25.0377, 121.5643), L.latLng(newValue.lat, newValue.lng)],
      //   createMarker: function() { return null},
      // }).addTo(this.myMap);

    }
  },
  mounted() {
    this.$nextTick(() => {
      this.myMap = this.$refs.myMap.mapObject;
    });
  }
};
</script>

<style scoped>

</style>