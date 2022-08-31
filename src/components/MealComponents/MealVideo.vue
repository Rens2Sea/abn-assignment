<template>
  <div>
    <YouTube class="big" :src="url" :width="320" :height="240"/>
  </div>
</template>

<script setup lang="ts">
import YouTube from 'vue3-youtube'

defineProps<{
  url: string
}>()

</script>

<style scoped>

</style>
