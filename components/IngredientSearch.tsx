'use client'
import ButtonBrutal from "./buttons/ButtonBrutal";
import React, { useEffect, useState } from "react";
import IngredientsList from "./ingredientLists/IngredientsList";
import AddedIngredientsList from "./ingredientLists/AddedIngredientsList";
import { Ingredient, Recipe } from "@prisma/client";
import RecipesList from "./recipes/RecipesList";

export default function IngredientSearch({ ingredientsFetched }: {
    ingredientsFetched: Ingredient[]
}) {

    const [ingredients, setIngredients] = useState<Ingredient[]>(ingredientsFetched)
    // addedIngredients used for searching recipes
    const [addedIngredients, setAddedIngredients] = useState<Ingredient[]>([])
    // ingredient in the input
    const [inputIngredient, setInputIngredient] = useState('')

    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [searchIsClicked, setSearchIsClicked] = useState(false)
    const [showResults, setShowResults] = useState(false)

    // on button click
    async function findRecipes() {
        setShowResults(true)
        setSearchIsClicked(true)
        const ingredients = addedIngredients.map((addedIngredient) => {
            return addedIngredient.title
        }).join(',')
        const data = await fetch(`http://localhost:3000/api/recipes?ingredients=${ ingredients }`)
        const recipes = await data.json()
        setRecipes(recipes)

        //animate button press
        setSearchIsClicked(false)
    }

    // ingredient input change
    useEffect(() => {
        setIngredients(ingredientsFetched.filter(ingredient => ingredient.title.includes(inputIngredient.toLowerCase())))
    }, [ingredientsFetched, inputIngredient])
    function handleIngredientChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setInputIngredient(event.target.value)
    }

    // adds first filtered ingredient when user presses Enter key for convenience.
    function addFirstFilteredIngredient(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        handleIngredientClick(ingredients[0])
    }

    // remove added ingredient when clicking on added ingredient
    function removeAddedIngredient(addedIngredient: Ingredient) {
        setAddedIngredients(prevAddedIngredients => {
            return prevAddedIngredients.filter(ingredient => {
                return ingredient !== addedIngredient
            })
        })

        setIngredients(prevIngredients => {
            const changedIngredientIndex = prevIngredients.findIndex(({ id }) => id === addedIngredient.id)
            if (changedIngredientIndex) {
                const newIngredients = [...prevIngredients]
                newIngredients[changedIngredientIndex].isAdded = false

                return newIngredients
            } else {
                return prevIngredients
            }
        })
    }

    // adds or removes ingredient to addedIngredients array
    function handleIngredientClick(ingredient: Ingredient) {
        setAddedIngredients(prevState => {
            if (prevState.includes(ingredient)) {
                return prevState.filter(prevIngredient => prevIngredient !== ingredient)
            } else {
                return [...prevState, ingredient] as Ingredient[]
            }
        })

        //toggle isAdded
        ingredient.isAdded = !ingredient.isAdded

    }

// render
    return (
            <div>
                <form onSubmit={ addFirstFilteredIngredient }>
                    {inputIngredient}
                    <input type='text' autoComplete='off' placeholder='Ingredient'
                           value={ inputIngredient }
                           onChange={ handleIngredientChange }
                           className='p-2 m-4'/>
                </form>

                <form onSubmit={ (event) => {
                    event.preventDefault()
                } }>
                    <ButtonBrutal type="submit" onClick={ findRecipes }
                                  isClicked={ searchIsClicked }>Search</ButtonBrutal>
                    {/*found recipes after button press*/ }
                    { showResults ? <h2 className='font-semibold text-2xl'>Found recipes: </h2> : '' }
                    { showResults && recipes.length === 0 ? 'No recipes found' :
                        <RecipesList recipes={ recipes }></RecipesList> }

                    <h2>Added ingredients: </h2>
                    <AddedIngredientsList
                        onClick={ (addedIngredient) => removeAddedIngredient(addedIngredient) }
                        addedIngredients={ addedIngredients }
                    />

                    <h2>All ingredients: </h2>
                    <IngredientsList
                        onClick={ (ingredient) => handleIngredientClick(ingredient) }
                        ingredients={ ingredients }
                    ></IngredientsList>
                </form>
            </div>
    );
}