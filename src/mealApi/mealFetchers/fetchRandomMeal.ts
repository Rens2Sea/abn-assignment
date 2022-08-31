import type { Meal } from '@/types'
import { fetchMeals } from '../mealApi'

export default async function fetchRandomMeal (): Promise<Meal> {
  const meals: Meal[] = await fetchMeals('random.php')

  if (meals.length) {
    return meals[0]
  } else {
    console.error('No random meal found!')
  }

  return null
}
