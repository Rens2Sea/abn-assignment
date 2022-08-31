<template>
  <div class="meal" :class="{ 'small' : small }">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="contents">
      <slot name="contents"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  small: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
  .meal {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-shadow:
      #d3d3d3 -10px 0px 13px -7px,
      #d3d3d3 10px 0px 13px -7px,
      #d3d3d3 2px 2px 5px 2px;
    border-top-right-radius: 5rem;
    border-top-left-radius: 5rem;
    &.small {
      border-top-right-radius: 2rem;
      border-top-left-radius: 2rem;
    }
    .header {
      flex-basis: 40%;
      flex-shrink: 1;
      position: relative;
    }
    .contents {
      padding: 1rem;
      flex-basis: 60%;
    }
  }
</style>
