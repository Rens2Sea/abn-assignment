<template>
  <div class="findmeal">
    <input
      type="text"
      v-model="keyword"
      placeholder="Find your favorite meal"
      @keyup.enter="search"
    />
    <FlatButton v-if="keyword" @click="search">Find meal</FlatButton>
  </div>
</template>

<script setup lang="ts">
import FlatButton from '@/components/FlatButton.vue'
import { onMounted, ref } from 'vue'
import { useMealStore } from '@/stores/mealStore'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const store = useMealStore()

const keyword = ref('')

onMounted(async () => {
  await router.isReady()
  keyword.value = route.query.keyword?.toString() as string
})

const search = () => {
  if (keyword.value) {
    store.setSearchKeyword(keyword.value)
    router.push({
      name: 'find',
      query: {
        keyword: keyword.value
      }
    })
  }
}
</script>

<style lang="scss" scoped>
  .findmeal {
    display: flex;
    flex-wrap: wrap;
    place-items: center;
    flex-direction: column;
    @media (min-width: 1024px) {
      flex-direction: row;
    }
  }
  input {
    flex: 1 1 0;
    margin: 0.3rem;
    padding: 0.5rem;
    min-width: 50%;
    border: 1px solid #d3d3d3;
    border-radius: 0.5rem;
    font-size: 1em;
  }
</style>
