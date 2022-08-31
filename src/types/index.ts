export interface MealIngredient {
  name: string
  measurement: string
}

interface MealType {
  id: number
  name: string
  instructions: string[]
  area: string
  category: string
  image: string
  source: string
  tags: string[]
  youtube: string
  ingredients: MealIngredient[]
}

export declare type Meal = MealType | null
