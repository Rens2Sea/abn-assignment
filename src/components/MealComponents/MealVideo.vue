<template>
  <div>
    <YouTube :src="url" :width="480" :height="360"/>
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
