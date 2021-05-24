<template>
  <div>
    <div id="map">
      <l-map ref="myMap" :zoom="zoom" :center="center" :options="options" style="height: 100vh">
        <l-tile-layer :url="url" :attribution="attribution" />
        <!-- 使用者現在位置 -->
        <l-marker :lat-lng="[25.04, 121.53]" :draggable="true">
          <l-icon icon-url="../icon/present.png" :iconSize="iconSize" />
        </l-marker>
        <!-- 所有runners位置 -->
        <RunnerMarker
          v-for="runnerData in runnerDatas"
          :key="runnerData.sno"
          :runner-data="runnerData"
        />

        <!-- 查看中路徑的起點標示 -->
        <l-marker v-if="routeGeoJson" :lat-lng="[routeStartLatLng[0], routeStartLatLng[1]]">
          <l-icon icon-url="../icon/start.png" :iconSize="iconSize" />
        </l-marker>
        <!-- 查看中路徑 -->
        <l-geo-json v-if="routeGeoJson" :geojson="routeGeoJson" :options="routeOptions" :layerType="'LineString'"></l-geo-json>
        <!-- 查看中路徑的終點標示 -->
        <l-marker v-if="routeGeoJson" :lat-lng="[routeEndLatLng[0], routeEndLatLng[1]]">
          <l-icon icon-url="../icon/end.png" :iconSize="iconSize" />
        </l-marker>
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
      iconSize: [64, 64],
      routeGeoJson: null,
      routeStartLatLng: null,
      routeEndLatLng: null,
      routeOptions: {
        color: '#FBC33C',
        weight: 7,
        dashArray: '10, 10, 10, 10, 10'
      }
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
    activeRunner(newValue) {
      //移動到actibeRunner位置
      this.flyTo(newValue.lat, newValue.lng, 17)

      //Todo:產生導航路線
      // L.Routing.control({
      //   waypoints: [L.latLng(25.0377, 121.5643), L.latLng(newValue.lat, newValue.lng)],
      //   createMarker: function() { return null},
      // }).addTo(this.myMap);
    },
    routeGeoJson(newValue) {
      this.routeStartLatLng = newValue[0].coordinates[0].slice().reverse()
      this.routeEndLatLng = newValue[0].coordinates[newValue[0].coordinates.length - 1].slice().reverse()
    }
  },
  mounted() {
    this.$nextTick(() => {
      // 將mpaObject裝進變數
      this.myMap = this.$refs.myMap.mapObject;
    });
  },
  created() {
    this.$bus.$on("check-route", lnglats => {
      const latlngs = lnglats.map(item => item.slice().reverse())
      this.setRouteGeoJson(lnglats)
      this.flyToBounds(latlngs)
    });
  },
  methods: {
    setRouteGeoJson(lnglats) {
      this.routeGeoJson = [
        {
          "type": "LineString",
          "coordinates": lnglats
        }
      ];
    },
    flyTo(lat, lng, zoom) {
      this.myMap.flyTo([lat, lng], zoom)
    },
    flyToBounds(bounds, options) {
      this.myMap.flyToBounds(bounds, options)
    }
  }
};
</script>

<style scoped>
</style>