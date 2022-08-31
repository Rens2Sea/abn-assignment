<template>
  <div>
    <span v-for="(instruction, index) in instructions" :key="index">
      {{ instruction }}
    </span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  instructions: string[]
}>()
</script>

<style lang="scss" scoped>
  div {
    span {
      padding: 0.5rem 0;
      display: block;
    }
  }
</style>
