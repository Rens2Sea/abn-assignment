import { describe, it, expect } from 'vitest'
import { parseMeal } from './mealParser'
import type { Meal } from '../types'

const expected: Meal = {
  id: 123,
  name: 'testMeal',
  instructions: ['1. do a', '2. do b'],
  area: '',
  category: '',
  image: '',
  source: '',
  tags: ['a', 'b'],
  youtube: '',
  ingredients: [
    {
      name: 'ingredient',
      measurement: '1'
    }
  ]
}

describe('mealParser', () => {
  it('should return a meal type from json', () => {
    const actual = parseMeal({
      idMeal: 123,
      strMeal: 'testMeal',
      strInstructions: '1. do a\r\n2. do b',
      strArea: '',
      strCategory: '',
      strMealThumb: '',
      strSource: '',
      strTags: 'a,b',
      strYoutube: '',
      strIngredient1: 'ingredient',
      strMeasure1: '1'
    })

    expect(actual).toStrictEqual(expected)
  })

  it('should return null when receiving null', () => {
    const actual = parseMeal(null)

    expect(actual).toBeNull()
  })
})
