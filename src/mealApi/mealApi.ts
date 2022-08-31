import type { Meal } from '@/types'
import { parseMeal } from './mealParser'

const mealApiBaseUrl = 'https://www.themealdb.com/api/json/v1/1/'

export async function fetchMeals (methodAndParams: string): Promise<Meal[]> {
  const response = await fetch(mealApiBaseUrl + '/' + methodAndParams)
  if (response.status !== 200) {
    console.error(`Failed to fetch from ${methodAndParams}: `, {
      status: response.status,
      message: await response.text()
    })
  }
  const responseText = await response.text()
  const responseJson = JSON.parse(responseText)

  if (!responseJson.meals) {
    return []
  }

  const parsedMeals: Meal[] = []
  responseJson.meals.forEach((mealJson: unknown) => {
    const meal: Meal = parseMeal(mealJson)
    parsedMeals.push(meal)
  })

  return parsedMeals
}
