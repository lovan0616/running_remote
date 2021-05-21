<template>
  <div>
    <div class="detail">
      {{ activeRunner.name }}
      總停車格： {{ activeRunner.status }}
    </div>
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