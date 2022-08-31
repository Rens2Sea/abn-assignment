<template>
  <BaseMealTile v-if="meal">
    <template #header>
      <MealTags :tags="meal.tags"/>
      <MealImage :url="meal.image"/>
    </template>
    <template #contents>
      <h3>{{meal.name}}</h3>
      <div class="container">
        <MealIngredients class="ingredients" :ingredients="meal.ingredients"/>
        <div>
          <MealInstructions class="instructions" :instructions="meal.instructions"/>
          <MealVideo class="video" v-if="meal.youtube" :url="meal.youtube" />
        </div>
      </div>
    </template>
  </BaseMealTile>
  <div v-else>
    <h1>Loading meal</h1>
  </div>
</template>

<script async setup lang="ts">
import fetchRandomMeal from '@/mealApi/mealFetchers/fetchRandomMeal'
import findMealById from '@/mealApi/mealFetchers/findMealById'
import type { Meal } from '@/types'
import { ref } from 'vue'
import BaseMealTile from './BaseMealTile.vue'
import MealIngredients from './MealIngredients.vue'
import MealVideo from './MealVideo.vue'
import MealInstructions from './MealInstructions.vue'
import MealImage from './MealImage.vue'
import MealTags from './MealTags.vue'

const props = defineProps<{
  random?: boolean,
  mealId?: number,
  meal?: Meal
}>()

const meal = ref<Meal>()

if (props.random) {
  meal.value = await fetchRandomMeal()
}

if (props.mealId) {
  meal.value = await findMealById(props.mealId)
} else if (props.meal) {
  meal.value = props.meal as Meal
}

</script>

<style lang="scss" scoped>
  .contents {
    h3 {
      font-size: 2rem;
    }
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1024px) {
        flex-direction: row;
      }
      > div {
        padding: 1rem;
        &.ingredients {
          min-width: 25%
        }
        &.instructions {
          border-top: 1px solid #d3d3d3;
          @media (min-width: 1024px) {
            border-top: 0;
            border-left: 1px solid #d3d3d3;
          }
        }
      }
    }
  }

</style>
