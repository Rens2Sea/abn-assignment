<template>
  <div>
    <ul v-for="(ingredient, index) in ingredients" :key="index">
      <li>
        {{ ingredient.measurement }} - {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { MealIngredient } from '@/types'

defineProps<{
  ingredients: MealIngredient[]
}>()
</script>

<style lang="scss" scoped>
  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      padding: 0.1rem 0.4rem;
      margin: 0.2rem;
      border-radius: 1rem;
    }
  }
</style>
