<template>
  <div class="results">
    <MealTileSmall class="recipe" v-for="meal in meals" :key="meal?.id"
      :meal="meal"
    />
  </div>
</template>

<script setup lang="ts">
import MealTileSmall from '@/components/MealComponents/MealTileSmall.vue'
import findMealsByName from '@/mealApi/mealFetchers/findMealsByName'
import type { Meal } from '@/types'
import { useRoute, useRouter } from 'vue-router'
import { useMealStore } from '@/stores/mealStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'

const router = useRouter()
const route = useRoute()

const store = useMealStore()

const { searchKeyword } = storeToRefs(store)

const meals = ref<Meal[]>([])

onMounted(async () => {
  await router.isReady()
  const foundMeals = await findMealsByName(route.query.keyword?.toString() as string)
  meals.value = foundMeals
})

watch(searchKeyword, async () => {
  const foundMeals = await findMealsByName(searchKeyword.value)
  meals.value = foundMeals
})

</script>

<style scoped>
.results {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
}

.recipe {
  flex: 1 1 20rem;

}
</style>
