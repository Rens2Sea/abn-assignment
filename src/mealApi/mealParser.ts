import type { Meal, MealIngredient } from '@/types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parseMeal (json: any): Meal {
  if (!json) {
    console.error('Unable to parse meal', json)
    return null
  }

  const meal: Meal = {
    id: json.idMeal,
    name: json.strMeal,
    instructions: parseInstructions(json.strInstructions),
    area: json.strArea,
    category: json.strCategory,
    image: json.strMealThumb,
    source: json.strSource,
    tags: parseTags(json.strTags),
    youtube: json.strYoutube,
    ingredients: parseIngredients(json)
  }

  return meal
}

function parseInstructions (instructions: string): string[] {
  if (!instructions || !instructions.length) {
    return []
  }

  return instructions.split('\r\n').filter(line => line)
}

function parseTags (tags: string): string[] {
  if (!tags || !tags.length) {
    return []
  }

  return tags.split(',')
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseIngredients (meal: any): MealIngredient[] {
  const ingredients: MealIngredient[] = []

  for (let i = 1; meal[`strIngredient${i}`]; i++) {
    ingredients.push(
      {
        name: meal[`strIngredient${i}`],
        measurement: meal[`strMeasure${i}`]
      }
    )
  }

  return ingredients
}
