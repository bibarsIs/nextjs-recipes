import React from "react";
import IngredientItem from "./IngredientItem";
import AddedIngredientItem from "./AddedIngredientItem";

{/*List of ingredients to be added to user's lists*/
}
export default function AddedIngredientsList({addedIngredients, setAddedIngredients}: {
    addedIngredients: string[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {

    // adds ingredient to addedIngredients array
    function handleRemoveIngredient(ingredient: string, event: React.MouseEvent<Element>) {
        setAddedIngredients(prevState => {
            return prevState.includes(ingredient) ? prevState : [...prevState, ingredient]
        })
    }

    return (
        <ul className='inline-flex flex-row'>
            {addedIngredients.map((ingredient) => {
                return <AddedIngredientItem onClick={() => {
                    setAddedIngredients(addedIngredients.filter(word => word !== ingredient))
                }}
                                       key={ingredient}>{ingredient}</AddedIngredientItem>
            })}
        </ul>
    )
}