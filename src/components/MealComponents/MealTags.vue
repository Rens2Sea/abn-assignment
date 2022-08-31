<template>
  <div class="tags">
    <span v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  tags: string[]
}>()
</script>

<style lang="scss" scoped>
  .tags {
    position: absolute;
    top: 5rem;
    left: 0;
    z-index: 1;
    span {
      display: block;
      background-color: white;
      color: black;
      margin: 0.5rem 0;
      padding: 0.2rem 0.5rem;
      line-height: 2rem;
      border-top-right-radius: 1rem;
      border-bottom-right-radius: 1rem;
    }
  }
</style>
