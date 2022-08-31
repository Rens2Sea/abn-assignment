<template>
  <BaseMealTile :small="true" v-if="meal" @click="goToRecipe">
    <template #header>
      <MealTags :tags="meal.tags"/>
      <MealImage :url="meal.image"/>
    </template>
    <template #contents>
      <h3>{{meal.name}}</h3>
    </template>
  </BaseMealTile>
  <div v-else>
    <h1>Loading meal</h1>
  </div>
</template>

<script async setup lang="ts">
import type { Meal } from '@/types'
import { useRouter } from 'vue-router'
import BaseMealTile from './BaseMealTile.vue'
import MealImage from './MealImage.vue'
import MealTags from './MealTags.vue'

const props = defineProps<{
  meal: Meal
}>()

const router = useRouter()

const goToRecipe = () => {
  if (props.meal) {
    router.push({
      name: 'meal',
      params: {
        id: props.meal.id
      }
    })
  }
}

</script>

<style lang="scss" scoped>
  .meal {
    &:hover {
      cursor: pointer;
      box-shadow:
      #d3d3d3 -15px 0px 16px -10px,
      #d3d3d3 15px 0px 16px -10px,
      #d3d3d3 4px 4px 9px 5px;
    }

    img {
      border-top-right-radius: 2rem;
      border-top-left-radius: 2rem;
    }
  }

  .contents {
    h3 {
      font-size: 2rem;
      text-align: center;
    }
  }
</style>
