import IngredientItem from "./IngredientItem";
import React, {useEffect, useState} from "react";

{/*List of ingredients to be added to user's lists*/
}
export default function IngredientsList({ingredients, setAddedIngredients}: {
    ingredients: string[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {

    // adds ingredient to addedIngredients array
    function handleAddIngredient(ingredient: string, event: React.MouseEvent<Element>) {
        setAddedIngredients(prevState => {
            return prevState.includes(ingredient) ? prevState : [...prevState, ingredient]
        })
    }


    const [isAdded, setIsAdded] = useState(false)
    return (
        <ul>
            {ingredients.map((ingredient) => {
                return <IngredientItem onClick={(event) => handleAddIngredient(ingredient, event)}
                                       isAdded={isAdded}
                                       key={ingredient}>{ingredient}</IngredientItem>
            })}
        </ul>
    )
}