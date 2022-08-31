<template>
  <main>
    <Suspense>
      <MealTile :random="true"/>
      <template #fallback>
        Loading
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import MealTile from '@/components/MealComponents/MealTile.vue'
</script>

<style scoped>

</style>
