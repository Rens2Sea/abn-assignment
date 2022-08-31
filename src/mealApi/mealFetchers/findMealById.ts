import type { Meal } from '@/types'
import { fetchMeals } from '../mealApi'

export default async function findMealById (id: number): Promise<Meal> {
  const meals: Meal[] = await fetchMeals(`lookup.php?i=${id}`)

  if (meals.length > 0) {
    return meals[0]
  }
  return null
}
