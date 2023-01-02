import React from "react";
import IngredientItem from "./IngredientItem";
import AddedIngredientItem from "./AddedIngredientItem";
import { Ingredient } from "@prisma/client";

{/*List of ingredients to be added to user's lists*/
}
export default function AddedIngredientsList({ addedIngredients, setAddedIngredients, setIngredients }: {
    addedIngredients: Ingredient[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}) {

    // returns "None" when no ingredients selected
    if (addedIngredients.length !== 0) {
        return (
            <ul className='inline-flex flex-row'>
                { addedIngredients.map((addedIngredient) => {
                    return <AddedIngredientItem
                        setAddedIngredients={ setAddedIngredients }
                        setIngredients={ setIngredients }
                        key={ addedIngredient.id }>{ addedIngredient }</AddedIngredientItem>
                }) }
            </ul>
        )
    } else {
        return (
            <div className='font-light m-2'>None</div>
        )
    }
}