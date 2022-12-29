import IngredientItem from "./IngredientItem";
import React, {useEffect, useState} from "react";

//  List of ingredients to be added to user's lists
export default function IngredientsList({ingredients, setAddedIngredients}: {
    ingredients: string[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {
    const [isAdded, setIsAdded] = useState(false)
    return (
        <ul>
            {ingredients.map((ingredient) => {
                return <IngredientItem setAddedIngredients={setAddedIngredients}
                                       key={ingredient}>{ingredient}</IngredientItem>
            })}
        </ul>
    )
}