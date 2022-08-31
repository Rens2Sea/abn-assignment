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

<style lang="scss" scoped>
  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
    @media (min-width: 1024px) {
      border-top-right-radius: 5rem;
      border-top-left-radius: 5rem;
    }
  }
</style>
