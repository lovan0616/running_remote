<template>
  <div>
    <div class="detail-tab cursor-pointer" :class="[{'text-brandyellow': tabedItem == 'detail'}]" @click.stop.prevent='setToDetail'>
      <span v-if="tabedItem === 'detail'">&#10003;</span>跑者介紹</div>
    <div class="history-tab cursor-pointer" :class="[{'text-brandyellow': tabedItem == 'history'}]" @click.stop.prevent='setToHistory'>
      <span v-if="tabedItem === 'history'">&#10003;</span>跑跑路徑</div>
      <!-- 暫時隱藏跑跑紀錄 -->
    <!-- <div class="record-tab cursor-pointer" :class="[{'text-brandyellow': tabedItem == 'record'}]" @click.stop.prevent='setToRecord'>
      <span v-if="tabedItem === 'record'">&#10003;</span>跑跑紀錄</div> -->
  </div>
</template>

<script>
export default {
  name: 'InfoTab',
  data() {
    return {
      tabedItem: 'detail'
    }
  },
  methods: {
    setToDetail() {
      this.tabedItem = 'detail'
      this.$emit('set-tabed-item', 'detail')
    },
    setToHistory() {
      this.tabedItem = 'history'
      this.$emit('set-tabed-item', 'history')
    },
    setToRecord() {
      this.tabedItem = 'record'
      this.$emit('set-tabed-item', 'record')
    },
  }
}
</script>