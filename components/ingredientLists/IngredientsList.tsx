import IngredientItem from "./IngredientItem";
import React from "react";
import { Ingredient } from "@prisma/client";

//  List of ingredients to be added to user's lists
export default function IngredientsList({ ingredients, setAddedIngredients, setIngredients }: {
    ingredients: Ingredient[],
    setAddedIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>,
    setIngredients: React.Dispatch<React.SetStateAction<Ingredient[]>>
}) {

    return (
        <ul className='flex flex-wrap w-full'>
            { ingredients.map((ingredient) => {
                return <IngredientItem setAddedIngredients={ setAddedIngredients }
                                       setIngredients={setIngredients}
                                       key={ ingredient.id }
                >{ ingredient }</IngredientItem>
            }) }
        </ul>
    )
}