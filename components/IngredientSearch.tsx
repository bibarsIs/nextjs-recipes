'use client'
import ButtonBrutal from "./buttons/ButtonBrutal";
import React, { useState } from "react";
import IngredientsList from "./ingredientLists/IngredientsList";
import AddedIngredientsList from "./ingredientLists/AddedIngredientsList";
import { Ingredient } from "@prisma/client";


export default function IngredientSearch({ ingredients }: {
    ingredients: Ingredient[]
}) {

    // addedIngredients used for searching recipes
    const [addedIngredients, setAddedIngredients] = useState<string[]>([])
    // ingredient in the input
    const [ingredient, setIngredient] = useState('')

    function findRecipes() {
        //
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
            <h2>Added ingredients: </h2>
            <AddedIngredientsList addedIngredients={ addedIngredients } setAddedIngredients={ setAddedIngredients }/>
            <h2>All ingredients: </h2>
            <IngredientsList ingredients={ ingredients } setAddedIngredients={ setAddedIngredients }></IngredientsList>
        </div>

    );
}