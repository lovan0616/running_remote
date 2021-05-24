<template>
  <div>
    <l-marker :lat-lng=latlng @click="setActiveRunner">
      <l-icon icon-url="/running_remote/image/runner.png" :iconSize='[64, 64]' />
    </l-marker>
  </div>
</template>

<script>
// sno(站點代號)、sna(中文場站名稱)、tot(總停車格)、sbi(可借車數)、bemp（可還空位數）、sarea(中文場站區域)、ar(中文地址)、act(場站是否暫停營運)

export default {
  name: 'RunnerMarker',
  props: {
    runnerData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // lat: '',
      // lng: '',
      // sno: '',
      // sna: '',
      // tot: '',
      // sbi: '',
      // bemp: '',
      // sarea: '',
      // ar: '',
      // act: '',
      // sareaen: '',
      // aren: '',
      // snaen: ''
    }
  },
  computed: {
    latlng() {
      return [ this.runnerData.lat, this.runnerData.lng]
    }
  },
  methods: {
    setActiveRunner() {
      this.$bus.$emit('set-active-runner', this.runnerData)
    }

  }
}
</script>