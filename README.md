# The Food Factory :pizza:

This web application shows a random meal when loading the home page and has a search functionality to search on meal name.

Each meal is represented with tags in the top left area of the image and a video at the bottom of the meal tile  if either are available.

Meals are fetched by accessing [The Meal DB](https://www.themealdb.com/api.php) api using the javascript Fetch api in [mealApi.ts](src/mealApi/mealApi.ts).
Every component that requires meals uses one of the [meal fetchers](src/mealApi/mealFetchers/).

Once a meal is fetched it is parsed by the [mealParser](src/mealApi/mealParser.ts) which turns it into a nice Typescript object for consumption elsewhere.

The [mealParser](src/mealApi/mealParser.ts) also has a few simple [unit tests](src/mealApi/mealParser.test.ts) to test the proper parsing of a tasty meal.

### Meals :meat_on_bone:

The meals themselfs are split into various components, but it all starts at the [BaseMealTile](src/components/MealComponents/BaseMealTile.vue). This is the base component of all meals, there are 2 implementations:

[MealTile](src/components/MealComponents/MealTile.vue) and [MealTileSmall](src/components/MealComponents/MealTileSmall.vue). The former is used when you have a meal selected and shows the meals name, ingredients, instructions, tags, image and a youtube video. The latter is used on the search results page and only shows the meals name and image but is clickable and has a slight hover-over effect.

#### Meal components

- [MealImage](src/components/MealComponents/MealImage.vue) - Image of a meal, requires a url
- [MealIngredients](src/components/MealComponents/MealIngredients.vue) - Ingredients of a meal, requires an array of [MealIngredients](src/types/index.ts)
- [MealInstructions](src/components/MealComponents/MealInstructions.vue) - Instructions of a meal, requires an array of strings
- [MealTags](src/components/MealComponents/MealTags.vue) - Tags of a meal, requires an array of strings. Is shown on the left side of the meal image
- [MealVideo](src/components/MealComponents/MealVideo.vue) - Youtube video of a meal, requires a url

### Other components

- [FindMeal](src/components/FindMeal.vue) - The search input and button. Pressing enter or clicking the button routes you to the `find` route with a query string with the search keyword. It also pushes the keyword into the [mealStore](src/stores/mealStore.ts).
- [FindMealResults](src/components/FindMealResults.vue) - After searching this will show all meals that are found.
- [FlatButton](src/components/FlatButton.vue) - It's a simple button component, nothing more, nothing less.

## Architectural decisions :bulb:

### Pinia

[Pinia](https://pinia.vuejs.org/) is used for very basic state management for the search functionality.

### Vue-router

[Vue Router](https://router.vuejs.org/) is used for the routing of the application. The following routes are available:
- `/` - The home page, shows a random meal
- `/meal/:id` - The meal page, shows a specific meal, you get here by clicking a meal in the search results page.
- `/find?keyword={keyword}` - The search page, shows the results of a search query.

### Vitest

[Vitest](https://vitest.dev/) is used for unit tests instead of Jest because it's Vite native which makes it very fast and it's the default now with Vue.js 3.

### Typescript

[Typescript](https://www.typescriptlang.org/) is used for type safety.

### StandardJS
[StandardJS](https://standardjs.com) is used as a simple style guide for javascript with some basic rules on what to do and what not to do in order to force standardisation.

### Sass

[SaSS](https://sass-lang.com/) is used mainly to support css nesting which can be handy when dealing with media queries.

### vue3-youtube

The [vue3-youtube](https://www.npmjs.com/package/vue3-youtube) package is used as a wrapper for the YouTube video player api to display the youtube videos.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
