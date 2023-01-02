'use client'
import ButtonBrutal from "./buttons/ButtonBrutal";
import React, { useState } from "react";
import IngredientsList from "./ingredientLists/IngredientsList";
import AddedIngredientsList from "./ingredientLists/AddedIngredientsList";
import { Ingredient, Recipe } from "@prisma/client";
import RecipesList from "./recipes/RecipesList";


export default function IngredientSearch({ ingredients }: {
    ingredients: Ingredient[]
}) {

    // addedIngredients used for searching recipes
    const [addedIngredients, setAddedIngredients] = useState<string[]>([])
    // ingredient in the input
    const [ingredient, setIngredient] = useState('')

    const [recipes, setRecipes] = useState<Recipe[]>([])
    // on button click
    async function findRecipes() {
        const ingredients = addedIngredients.join()
        const data = await fetch(`http://localhost:3000/api/recipes?ingredients=${ingredients}`)
        setRecipes(await data.json())
    }

    // ingredient input change
    function handleIngredientChange(event: { target: { value: React.SetStateAction<string>; }; }) {
        setIngredient(event.target.value)
    }

    // adds first filtered ingredient when user presses Enter key for convenience.
    function addFirstFilteredIngredient(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

    }

// render
    return (
        <div>
            <form onSubmit={ addFirstFilteredIngredient }>
                <input type='text' autoComplete='off' placeholder='Ingredient'
                       value={ ingredient }
                       onChange={ handleIngredientChange }
                       list='ingredients'
                       className='p-2 m-4'/>
            </form>
            <ButtonBrutal type="submit" onClick={ findRecipes }>Search</ButtonBrutal>
            <RecipesList recipes={recipes}></RecipesList>
            <h2>Added ingredients: </h2>
            <AddedIngredientsList addedIngredients={ addedIngredients } setAddedIngredients={ setAddedIngredients }/>
            <h2>All ingredients: </h2>
            <IngredientsList ingredients={ ingredients } setAddedIngredients={ setAddedIngredients }></IngredientsList>
        </div>

    );
}