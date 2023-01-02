import IngredientItem from "./IngredientItem";
import React from "react";
import { Ingredient } from "@prisma/client";

//  List of ingredients to be added to user's lists
export default function IngredientsList({ingredients, setAddedIngredients}: {
    ingredients: Ingredient[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<string[]>>,
}) {
    return (
        <ul className='flex flex-wrap w-full'>
            {ingredients.map((ingredient) => {
                return <IngredientItem setAddedIngredients={setAddedIngredients}
                                       key={ingredient.id}>{ingredient.title}</IngredientItem>
            })}
        </ul>
    )
}