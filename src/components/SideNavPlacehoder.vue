<template>
  <div class="relative">
    <img src="/running_remote/image/placeholder-50.png" alt="">
    <h1 class="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-gray-700">跑跑上已累積<span class="text-brandyellow font-extrabold text-3xl">{{runnerAmount}}</span>人囉！<br>開始找尋你的理想跑友吧！</h1>
  </div>
</template>

<script>
export default {
  name: 'SideNavPlaceholder',
  props: {
    runnerAmount: {
      type: Number
    }
  }
}
</script>