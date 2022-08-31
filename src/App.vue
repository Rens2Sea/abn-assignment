<template>
  <header>
    <div>
      <h1>Welcome to the food factory!</h1>
      <FindMeal/>
    </div>
    <span @click="goHomeOrRefresh" class="material-symbols-outlined home">
      home
    </span>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import FindMeal from './components/FindMeal.vue'
import { RouterView, useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goHomeOrRefresh = () => {
  // Vue router doesn't allow routing to the same route it's already on, so force a page reload. 🤔
  if (route.name === 'home') {
    location.reload()
  } else {
    router.push('/')
  }
}

</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  place-items: center;
  h1 {
    letter-spacing: 0.2rem;
    padding-bottom: 1rem;
  }
}
.home {
  font-size: 2rem;
  cursor: pointer;
  margin: 1.5rem 0;
}

</style>
