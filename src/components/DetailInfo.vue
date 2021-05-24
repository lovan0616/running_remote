<template>
  <div>
    <h3 class="mt-5 font-semibold text-gray-700">關於</h3>
    <div class="detail ccard relative">
      <span>{{ activeRunner.name }}</span>
      <span class="ml-1 text-sm text-gray-500">@{{ activeRunner.account }}</span>
      <div class="absolute top-1 right-1.5 p-1 border  rounded-2xl text-xs">{{ activeRunner.status }}<span v-if="activeRunner.status == '上線中'" class="text-green-400 ml-0.5">&#8226;</span>
      <span v-else class="text-gray-400 ml-0.5">&#8226;</span></div>
      <p>{{ activeRunner.level }}</p>
      <div class="absolute bottom-1 right-1.5 text-xs">累積<p class="text-xl inline font-semibold text-brandwatermelon">{{ activeRunner.odometer }}</p></div>
    </div>

    <h3 class="mt-5 font-semibold">關注社團</h3>
    <ul class="ccard"><li v-for="(group, index) in activeRunner.groups" :key='index' >{{ group }}</li></ul>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    activeRunner: {
      type: Object,
    }
  },
}
</script>