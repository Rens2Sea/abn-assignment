<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>

<style scoped>
  button {
    border: 1px solid #d3d3d3;
    background-color: #2c3e50;
    color: white;
    padding: 0.4rem;
    border-radius: 0.5rem;
    cursor: pointer;
    height: 2rem;
  }
</style>
