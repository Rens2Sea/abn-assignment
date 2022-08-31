<template>
  <main>
    <div class="buttonbar">
      <FlatButton @click="$router.go(-1)">Back to results</FlatButton>
    </div>
    <Suspense>
      <MealTile v-if="mealId !== -1" :mealId="mealId"/>
      <template #fallback>
        Loading
      </template>
    </Suspense>
  </main>
</template>

<script setup lang="ts">
import MealTile from '@/components/MealComponents/MealTile.vue'
import FlatButton from '@/components/FlatButton.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const mealId = computed((): number => {
  if (route.params.id) {
    const id: number = parseInt(route.params.id as string)
    return id
  }
  return -1
})

</script>

<style scoped>
.buttonbar {
  padding: 1rem 0;
}
</style>
