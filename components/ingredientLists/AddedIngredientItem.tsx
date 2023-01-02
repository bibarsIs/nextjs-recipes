import React from "react";
import { Ingredient } from "@prisma/client";

export default function AddedIngredientItem({ setAddedIngredients, setIngredients, children: addedIngredient }: {
    setAddedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
    children: Ingredient
}) {

    // removes from addedIngredients array
    function handleClick(addedIngredient: Ingredient) {
        console.log('clicked on ' + addedIngredient.title)
        setAddedIngredients(prevAddedIngredients => {
            return prevAddedIngredients.filter(ingredient => {
                return ingredient !== addedIngredient
            })
        })

        // mark ingredient in all ingredients list unclicked
        setIngredients(prevIngredients => {
            const changedIngredientIndex = prevIngredients.findIndex(({title}) => title === addedIngredient.title)
            if (changedIngredientIndex) {
                prevIngredients[changedIngredientIndex].isAdded = false
                return prevIngredients
            } else {
                return prevIngredients
            }
        })
    }


    return (
        <li onClick={ () => handleClick(addedIngredient) }
            className={ `cursor-pointer select-none font-light m-2 p-2 px-4 bg-rose-800 text-white rounded-full` }>{ addedIngredient.title } x</li>
    );
}
