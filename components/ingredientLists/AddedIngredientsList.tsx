import React from "react";
import IngredientItem from "./IngredientItem";
import AddedIngredientItem from "./AddedIngredientItem";

{/*List of ingredients to be added to user's lists*/
}
export default function AddedIngredientsList({addedIngredients, setAddedIngredients}: {
    addedIngredients: string[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {

    // removes addedIngredients array
    function handleRemoveIngredient(ingredient: string, event: React.MouseEvent<Element>) {
        setAddedIngredients(addedIngredients.filter(word => word !== ingredient))
    }

    if (addedIngredients.length !== 0) {
        return (
            <ul className='inline-flex flex-row'>
                {addedIngredients.map((ingredient) => {
                    return <AddedIngredientItem
                        onClick={(event) => handleRemoveIngredient(ingredient, event)}
                        key={ingredient}>{ingredient}</AddedIngredientItem>
                })}
            </ul>
        )
    } else {
        return (
            <div className='font-light m-2'>None</div>
        )
    }
}