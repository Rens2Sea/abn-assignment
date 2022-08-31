import type { Meal } from '@/types'
import { fetchMeals } from '../mealApi'

export default async function findMealsByName (keyword: string): Promise<Meal[]> {
  const meals: Meal[] = await fetchMeals(`search.php?s=${keyword}`)

  return meals
}
