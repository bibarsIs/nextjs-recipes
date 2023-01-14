import React from "react";
import AddedIngredientItem from "./AddedIngredientItem";
import { Ingredient } from "@prisma/client";

{/*List of ingredients to be added to user's lists*/
}
export default function AddedIngredientsList({ onClick, addedIngredients }: {
    onClick: (addedIngredient: Ingredient) => void,
    addedIngredients: Ingredient[],
}) {

    // renders "None" when no ingredients selected
    if (addedIngredients.length !== 0) {
        return (
            <ul className='inline-flex flex-row'>
                { addedIngredients.map((addedIngredient) => {
                    return <AddedIngredientItem
                        onClick={onClick}
                        key={ addedIngredient.id }>{ addedIngredient }</AddedIngredientItem>
                }) }
            </ul>
        )
    } else {
        return (
            <div className='font-light m-2 my-4'>None added</div>
        )
    }
}
