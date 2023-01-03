<template>
  <div>
    <InfoTab @set-tabed-item=afterSetTabedItem class="ccard flex justify-around" />
    <DetailInfo :active-runner=activeRunner v-if="tabedItem === 'detail'" />
    <History :active-runner=activeRunner v-if="tabedItem === 'history'" />
    <!-- 暫時隱藏 Record 元件
    <Record :active-runner=activeRunner v-if="tabedItem === 'record'" /> -->
    <Record :active-runner=activeRunner v-show="false" />
  </div>
</template>

<script>
import InfoTab from '../components/InfoTab'
import DetailInfo from '../components/DetailInfo'
import History from '../components/History'
import Record from '../components/Record'

export default {
  name: 'RunnerInfo',
  components: {
    InfoTab,
    DetailInfo,
    History,
    Record
  },
  data() {
    return {
      tabedItem: 'detail'
    }
  },
  props: {
    activeRunner: {
      type: Object,
    }
  },
  methods: {
    afterSetTabedItem(item) {
      this.tabedItem = item
    }
  }
}
</script>
