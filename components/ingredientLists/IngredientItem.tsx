import React, { useState } from "react";
import { Ingredient } from "@prisma/client";

export default function IngredientItem({ setAddedIngredients, setIngredients, children: ingredient }: {
    children: Ingredient,
    setAddedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
}) {

    // adds ingredient to addedIngredients array
    function handleClick(ingredient: Ingredient) {
        setAddedIngredients(prevState => {
            if (prevState.includes(ingredient)) {
                return prevState.filter(prevIngredient => prevIngredient !== ingredient)
            } else {
                return [...prevState, ingredient] as Ingredient[]
            }
        })

        // set isAdded false
        setIngredients(prevIngredients => {
            const changedIngredientIndex = prevIngredients.findIndex(({title}) => title === ingredient.title)
            if (changedIngredientIndex) {
                console.log(prevIngredients[changedIngredientIndex])
                prevIngredients[changedIngredientIndex].isAdded = !prevIngredients[changedIngredientIndex].isAdded
                return prevIngredients
            } else {
                return prevIngredients
            }
        })
    }

    return (
        <li onClick={ () => handleClick(ingredient) }
            className={ `
            cursor-pointer select-none font-light m-2
            bg-yellow-400 rounded
            ${ ingredient.isAdded ? 'line-through' : '' }` }>{ ingredient.title }</li>
    );
}