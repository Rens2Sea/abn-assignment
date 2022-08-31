<template>
  <div class="video">
    <YouTube :src="url"/>
  </div>
</template>

<script setup lang="ts">
import YouTube from 'vue3-youtube'

defineProps<{
  url: string
}>()

</script>

<style lang="scss">
  .video {
    padding: 1rem 0;
    div {
      width: 100% !important;
      iframe {
        width: 100% !important;
      }
    }
  }
</style>
