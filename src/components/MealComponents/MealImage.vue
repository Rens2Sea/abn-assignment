<template>
  <img v-if="url" :src="url"/>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
  }
</style>
